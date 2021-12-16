import React, { useState, useContext, useEffect } from "react";

import { useHttpClient } from "../shared/hooks/http-hook";

import { IoHomeOutline, IoPowerOutline } from "react-icons/io5";

import { AuthContext } from "../shared/context/auth-context";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    name: "",
    price: "",
    description: "",
    bulkName: "",
    bulkDescription: "",
    bulkPrice: "",
    image: null,
    bulkImage: null,
  });
  const { fields, append } = useFieldArray({
    control,
    name: "test",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        price: "",
        description: "",
        bulkName: "",
        bulkDescription: "",
        bulkPrice: "",
      });
    }
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

  const submitAProject = async (cData) => {
    console.log(cData);

    // try {
    //   //const fileContent = fs.readFileSync(data.image[0])
    //   const formData = new FormData();
    //   formData.append("coverPhotoBucketId", file);
    //   formData.append("type", cData.name);
    //   formData.append("description", cData.description);
    //   formData.append("materialsUsed", );

    //   await sendRequest(
    //     `http://localhost:5000/admin/createConsumerItem`,
    //     "POST",
    //     // JSON.stringify({
    //     //     name: data.name,
    //     //     description: data.description,
    //     //     price: data.price,
    //     //     bucketPhotoId: data.image[0]

    //     // }),

    //     formData,

    //     {
    //       //"Content-Type": "application/json",
    //       Authorization: "Bearer " + auth.token,
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const homePageToggle = () => {
    navigate("/");
  };

  const logoutToggle = () => {
    auth.logout();
  };

  return (
    <div className="dashboard">
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
          <div className="addItem-inputs">
            <label className="addItem-picInput-label" for="input">
              add image
            </label>
            <input
              id="input"
              {...register("cImage")}
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={pickedHandler}
              className="addItem-picInput"
            />
            {/* <button type="button" onClick={pickImageHandler}> pick image</button> */}
            <div></div>
            <br />
            <br />
            {fields.map((item, index) => (
              <li key={item.id}>
                <input {...register(`test.${index}.firstName`)} />
                <input {...register(`test.${index}.firstName`)} />
                <input {...register(`test.${index}.firstName`)} />
              </li>
            ))}

            <input {...register("priceD")} />
            <br />
            <input {...register("priceD")} />
            <input {...register("priceD")} />
            <Controller />

            <button className="addItem-submitButton">submit</button>
          </div>
        </form>
        {previewUrl && (
          <img
            className="image-upload__preview"
            src={previewUrl}
            alt="preview"
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
