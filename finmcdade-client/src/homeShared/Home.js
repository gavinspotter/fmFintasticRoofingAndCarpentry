import React from "react";

import titleImg from "../img/fintastic_home.jpeg";
import "../css/style.css";
import { IoCreateOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div>
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
          <IoCreateOutline style={{ stroke: "url(#blue-gradient)" }} />
        </div>
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
