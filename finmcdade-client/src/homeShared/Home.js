import React from "react";

import titleImg from "../img/fintastic_home.jpeg";
import "../css/style.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <img
          className="home"
          src={titleImg}
          alt="fintastic roofing carpentry and shingles, go with us!"
        />
        <div className="home-aboutUs">
          <div className="home-aboutUs-consultation">consultation</div>
        </div>

        <div className="home-carpentry">
          <span className="tie-left"></span>
          carpentry <span className="tie-right"></span>
        </div>

        <div className="home-roofing">
          {" "}
          <span className="tie-left"></span>
          roofing <span className="tie-right"></span>
        </div>
        <div className="home-siding">
          <span className="tie-left"></span> siding{" "}
          <span className="tie-right"></span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
