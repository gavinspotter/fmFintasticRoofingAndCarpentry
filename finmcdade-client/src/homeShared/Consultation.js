import React from "react";

import consultationImg from "../img/consultation-photo.jpeg";

const Consultation = () => {
  return (
    <div className="consultation">
      <img
        className="consultation"
        src={consultationImg}
        alt="Let's get started!"
      />
      <div className="consultation-box">
        <div className="consultation-title">
          <h1 className="italicFont">You're better off with us!</h1>
          <h3>Fill out the form, and let us reach out to you.</h3>
        </div>
        <div className="consultation-hours">
          <h2>Reach Out</h2>
          <div>
            <label>All Week</label>
          </div>
          <div>
            <label>7am - 7pm</label>
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <label></label>
          </div>
        </div>
        <form className="consultation-form">
          <div>
            <label>Name:</label>
          </div>
          <div>
            <label>First</label>
          </div>
          <div>
            <label>Last</label>
          </div>
          <div>
            <label>Phone:</label>
          </div>
          <div>
            <label>Email:</label>
          </div>
          <div>
            <label>Street:</label>
          </div>
          <div>
            <label>City:</label>
          </div>
          <div>
            <label>State:</label>
          </div>
          <div>
            <label>Zip Code:</label>
          </div>
          <div>
            <p>What hour of the day may we reach out to you?</p>
            <label>Hour:</label>
            <label>Date:</label>
          </div>

          <div>
            <label>Details:</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Consultation;
