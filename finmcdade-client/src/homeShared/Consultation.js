import React, { useEffect } from "react";

import consultationImg from "../img/consultation-photo.jpeg";

import { Link } from "react-router-dom";

import { useHttpClient } from "../shared/hooks/http-hook";
import { IoArrowBackOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import ErrorModal from "../shared/UIElements/ErrorModal";

const Consultation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    hour: "",
    date: "",
    details: "",
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        hour: "",
        date: "",
        details: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const submitConsultationRequest = async (data) => {
    console.log(data);
    console.log(data.email);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/global/consultationRequest`,
        "POST",
        JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          email: data.email,
          street: data.street,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          hour: data.hour,
          date: data.date,
          details: data.details,
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
  };

  return (
    <div className="consultation">
      <img
        className="consultation-img"
        src={consultationImg}
        alt="Let's get started!"
      />
      <ErrorModal error={error} onClear={clearError} />
      <div className="consultation-box">
        <Link to="/">
          <div className="consultation-backToHome">
            <IoArrowBackOutline />
          </div>
        </Link>
        <div className="consultation-title">
          <h1 className="italicFont">You're better off with us!</h1>
          <h3>Fill out the form, and let us reach out to you.</h3>
        </div>
        <div className="consultation-hours">
          <div className="consultation-hours-title italicFont">Reach Out</div>
          <div>
            <div className="consultation-hours-paragraph">
              We're available every day <br /> <span>7am - 7pm</span> <br />{" "}
              Give us a call at <br /> <span>(603) 374-4323</span> <br />
              Shoot us an email at
              <br />
              fin@fintasticcarpentry.com <br /> We would love to hear from you!
            </div>
          </div>
        </div>
        <div className="consultation-form">
          <form>
            <div className="block">
              <div className="inlineBlock consultation-form-blocks">
                <label>First Name:</label>
                <br />
                <input className="getFont" {...register("firstName")} />
              </div>
              <div className="inlineBlock consultation-form-blocks">
                <label>Last Name:</label>
                <br />
                <input className="getFont" {...register("lastName")} />
              </div>
            </div>
            <div className="block">
              <div className="inlineBlock consultation-form-blocks">
                <label>Phone:</label>
                <br />
                <input className="getFont" {...register("phoneNumber")} />
              </div>
              <div className="inlineBlock consultation-form-blocks">
                <label>Email:</label>
                <br />
                <input className="getFont" {...register("email")} />
              </div>
            </div>
            <div className="consultation-form-blocks">
              <label>Street:</label>
              <br />
              <input
                {...register("street")}
                className="consultation-form-streetInput getFont"
              />
            </div>
            <div className="inlineBlock consultation-form-blocks">
              <label>City:</label>
              <br />
              <input {...register("city")} />
            </div>
            <div className="inlineBlock consultation-form-blocks">
              <label>State:</label>
              <br />
              <input className="getFont" {...register("state")} />
            </div>
            <div className="consultation-form-blocks">
              <label>Zip Code:</label>
              <br />
              <input className="getFont" {...register("zipCode")} />
            </div>
            <div>
              <p>What hour of the day may we reach out to you?</p>
              <div className="inlineBlock consultation-form-blocks">
                <label>Hour:</label>
                <br />
                <input className="getFont" {...register("hour")} />
              </div>

              <div className="inlineBlock consultation-form-blocks">
                <label>Date:</label>
                <br />
                <input className="getFont" {...register("date")} />
              </div>
            </div>

            <div className=" consultation-form-blocks">
              <label>Details:</label>
              <br />
              <textarea
                {...register("details")}
                className="consultation-textArea getFont"
              />
            </div>
            <div
              onClick={handleSubmit(submitConsultationRequest)}
              className="consultation-button"
            >
              submit
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
