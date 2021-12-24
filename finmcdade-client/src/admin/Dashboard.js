import React, { useState, useContext, useEffect } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

import {
  IoAttachOutline,
  IoCheckboxOutline,
  IoCloseOutline,
  IoHomeOutline,
  IoPowerOutline,
} from "react-icons/io5";

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
        type: "",
        description: "",
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

  const submitAProject = async (data) => {
    console.log(data);

    try {
      //const fileContent = fs.readFileSync(data.image[0])
      const formData = new FormData();

      // if (data.materialsUsed.length) {
      //   console.log("hi");
      //   for (let i = 0; i < data.materialsUsed.length; i++) {

      //   }
      // }

      if (data.pics) {
        for (let i = 0; i < data.pics.length; i++) {
          formData.append(i, data.pics[i].picture[0]);
        }
      }

      if (data.pics.length > 0) {
        console.log(data.pics.length);
        formData.append(data.pics.length, data.picture[0]);
      } else if (data.pics.length === 0) {
        console.log(data.pics.length);
        console.log(file);
        formData.append("0", file);
      }
      formData.append("materialsUsed", JSON.stringify(data.materialsUsed));

      formData.append("type", data.type);
      formData.append("description", data.description);
      //formData.append("materialsUsed");

      await sendRequest(
        `http://localhost:5000/api/admin/createProject`,
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

  return (
    <div className="dashboard">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
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

              <select {...register("type")}>
                <option value="roofing">roofing</option>
                <option value="siding">siding</option>
                <option value="carpentry">carpentry</option>
              </select>
            </div>
            <div className="dashboard-description">
              <label className="dashboard-description-indiv">
                description:{" "}
              </label>
              <textarea
                className="dashboard-description-indiv dashboard-textarea"
                {...register("description")}
                type="text"
              />
            </div>
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
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
                className="dashboard-picDisplay"
              />
            </div>
            {previewUrl && (
              <img
                className="image-upload__preview"
                src={previewUrl}
                alt="preview"
              />
            )}
            {/* <button type="button" onClick={pickImageHandler}> pick image</button> */}

            <br />
            <div>
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
            <div>
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
            </div>

            {arr1.fields.map((item, index) => (
              <li className="dashboard-materials-listItems" key={item.id}>
                <label>description:</label>
                <input {...register(`materialsUsed.${index}.name`)} />
                <label className="marginleft">dimensions:(optional)</label>
                <input
                  defaultValue={null}
                  {...register(`materialsUsed.${index}.dimensions`)}
                />
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
