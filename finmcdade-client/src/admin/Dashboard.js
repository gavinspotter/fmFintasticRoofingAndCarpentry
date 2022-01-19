import React, { useState, useContext, useEffect, useRef } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import {
  IoArrowBackOutline,
  IoAttachOutline,
  IoCheckboxOutline,
  IoCloseOutline,
  IoHomeOutline,
  IoPowerOutline,
} from "react-icons/io5";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { AuthContext } from "../shared/context/auth-context";
import {
  Controller,
  useFieldArray,
  useForm,
  FormProvider,
} from "react-hook-form";
import { useNavigate } from "react-router";
import ErrorModal from "../shared/UIElements/ErrorModal";
import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const {
    register,
    //control,
    handleSubmit,
    reset,
    trigger,
    setError,
    control,
    formState: { isSubmitSuccessful },
  } = useForm({
    picture: null,
    type: "",
    description: "",
    // name: "",
    // price: "",
    // description: "",
    // bulkName: "",
    // bulkDescription: "",
    // bulkPrice: "",
    // image: null,
    // bulkImage: null,
  });

  // const [crop, setCrop] = useState({ aspect: 16 / 9 });

  const arr2 = useFieldArray({
    control: control,

    name: "pics",
  });

  const arr1 = useFieldArray({
    control: control,

    name: "materialsUsed",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        //type: "",
        description: "",
        materialsUsed: [],
      });
    }
    setPreviewUrl(null);
  }, [reset, isSubmitSuccessful]);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedfile;
    let fileIsValid = isValid;
    if (event.target.files || event.target.files.length === 1) {
      pickedfile = event.target.files[0];
      setFile(pickedfile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    //console.log(cropper.getCroppedCanvas().toDataURL());
  };

  const submitAProject = async (data) => {
    console.log(data);
    const imageElement = cropperRef.current;
    console.log(imageElement);

    try {
      //const fileContent = fs.readFileSync(data.image[0])
      const formData = new FormData();

      // if (data.materialsUsed.length) {
      //   console.log("hi");
      //   for (let i = 0; i < data.materialsUsed.length; i++) {

      //   }
      // }

      const sendBlob = imageElement.cropper.getCroppedCanvas().toDataURL();

      var binary = atob(sendBlob.split(",")[1]),
        array = [];
      for (var i = 0; i < binary.length; i++) array.push(binary.charCodeAt(i));
      const getBlob = new Blob([new Uint8Array(array)], { type: file.type });

      if (data.pics) {
        console.log(file);
        for (let i = 0; i < data.pics.length; i++) {
          formData.append(i, data.pics[i].picture[0]);
        }

        console.log(sendBlob);
        formData.append(data.pics.length, getBlob);
      } else if (!data.pics) {
        formData.append("0", getBlob);
      }

      // if (data.pics.length > 0) {
      //   console.log(data.pics.length);
      //   formData.append(data.pics.length, data.picture[0]);
      // } else if (data.pics.length === 0) {
      //   console.log(data.pics.length);
      //   console.log(file);
      //   formData.append("0", file);
      // }
      // if (data.materialsUsed) {
      //   formData.append("materialsUsed", JSON.stringify(data.materialsUsed));
      // }
      formData.append("type", data.type);
      //formData.append("description", data.description);
      //formData.append("materialsUsed");

      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/createProject`,
        "POST",
        // JSON.stringify({
        //   name: data.name,
        //   description: data.description,
        //   price: data.price,
        //   bucketPhotoId: data.image[0],
        // }),

        formData,

        {
          //"Content-Type": "application/json",
          Authorization: "Bearer " + auth.token,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const homePageToggle = () => {
    navigate("/");
  };

  const logoutToggle = () => {
    auth.logout();
  };

  const [resetIt, setResetIt] = useState();

  const resetPic = () => {
    setResetIt(null);
  };

  // console.log(crop);

  return (
    <div className="dashboard">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {/* <Link to="/">
        <div className="projectLook-goBack projectLook-goBack-dash">
          <IoArrowBackOutline />
        </div>
      </Link> */}
      <div onClick={homePageToggle} className="dashboard-homeNav">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>

        <IoHomeOutline style={{ stroke: "url(#blue-gradient)" }} />
      </div>

      <div onClick={logoutToggle} className="dashboard-logout">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>

        <IoPowerOutline style={{ stroke: "url(#blue-gradient)" }} />
      </div>

      {/* <div className="dashboard-logout">
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#33D4FF" offset="0%" />
            <stop stopColor="#015CD0" offset="100%" />
          </linearGradient>
        </svg>
        <IoPower style={{ stroke: "url(#blue-gradient)" }} />
      </div> */}

      <div className="dashboard-addPhotos">
        <form className="addItem-form" onSubmit={handleSubmit(submitAProject)}>
          <div className="dashboard-inputs">
            <div className="dashboard-type">
              <label className="addItem-picInput-label">type: </label>

              <select defaultValue="roofing" {...register("type")}>
                <option value="roofing">roofing</option>

                <option value="carpentry">carpentry</option>
              </select>
            </div>
            {/* <div className="dashboard-description">
              <label className="dashboard-description-indiv">
                description:{" "}
              </label>
              <textarea
                className="dashboard-description-indiv dashboard-textarea"
                {...register("description")}
                type="text"
              />
            </div> */}
            <div>
              <label className="dashboard-coverPhoto">cover photo: </label>
              <label
                className="dashboard-coverPhoto-inputIcon"
                for="coverPhoto"
              >
                <IoAttachOutline />
              </label>

              <input
                id="coverPhoto"
                {...register("picture")}
                ref={cropperRef}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
                className="dashboard-picDisplay"
              />
            </div>
            {previewUrl && (
              <div>
                <img
                  className="image-upload__preview"
                  src={previewUrl}
                  alt="preview"
                />
                <div className="image-upload__preview">
                  <Cropper
                    src={previewUrl}
                    initialAspectRatio={12 / 9}
                    //crop={onCrop}
                    ref={cropperRef}
                  />
                </div>
              </div>
            )}

            {/* <button type="button" onClick={pickImageHandler}> pick image</button> */}

            <br />
            <div className="dashboard-pPics-uncover">
              <label className="dashboard-pPics-title">project pics: </label>
              <span
                className="dashboard-coverPhoto-iconFont"
                type="button"
                onClick={() => arr2.append({ picture: null })}
              >
                <IoAttachOutline />
              </span>
            </div>

            {arr2.fields.map((item, index) => (
              <li className="dashboard-pPics-listItems" key={item.id}>
                <label>photo:</label>
                <input
                  className="dashboard-choosePhoto"
                  {...register(`pics.${index}.picture`)}
                  type="file"
                  accept=".jpg,.png,.jpeg"
                />
                <button
                  className="dashboard-xButton"
                  type="button"
                  onClick={() => arr2.remove(index)}
                >
                  <IoCloseOutline />
                </button>
                {/* <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                /> */}
              </li>
            ))}

            <br />
            {/* <div>
              <label className="dashboard-materials-title">
                materials: (optional)
              </label>
              <span
                className="dashboard-coverPhoto-iconFont"
                type="button"
                onClick={() => arr1.append({ name: "", dimensions: "" })}
              >
                <IoAttachOutline />
              </span>
            </div> */}

            {arr1.fields.map((item, index) => (
              <li className="dashboard-materials-listItems" key={item.id}>
                <div className="mobileBlock">
                  <label>description:</label>
                  <input {...register(`materialsUsed.${index}.name`)} />
                </div>
                <div className="mobileBlock">
                  <label className="marginleft">dimensions:(optional)</label>
                  <input
                    defaultValue={null}
                    {...register(`materialsUsed.${index}.dimensions`)}
                  />
                </div>
                <button
                  className="dashboard-xButton"
                  type="button"
                  onClick={() => arr1.remove(index)}
                >
                  <IoCloseOutline />
                </button>
                {/* <Controller
                  render={({ field }) => <input {...field} />}
                  name={`test.${index}.lastName`}
                  control={control}
                /> */}
              </li>
            ))}

            <button className="dashboard-submit">
              <IoCheckboxOutline />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
