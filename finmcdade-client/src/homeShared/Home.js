import React, { useContext, useEffect, useState } from "react";

import titleImg from "../img/fintasticCover.JPG";
import "../css/style.css";
import { IoCreateOutline, IoDuplicateOutline } from "react-icons/io5";
import { AuthContext } from "../shared/context/auth-context";
import { useNavigate } from "react-router";
import fintasticShark from "../img/fintsticShark.JPG";

import { useHttpClient } from "../shared/hooks/http-hook";
import RoofingProjectsList from "./roofingProjects/RoofingProjectsList";
import SidingProjectsList from "./sidingProjects/SidingProjectsList";
import CarpentryProjectsList from "./carpentryProjects/CarpentryProjectsList";
import { Link } from "react-router-dom";

const Home = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [carpentryProjects, setCarpentryProjects] = useState();

  const [sidingProjects, setSidingProjects] = useState();

  const [roofingProjects, setRoofingProjects] = useState();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/global/getProjects`
        );

        console.log(responseData);
        //console.log(sieveRoofing);

        const sieveRoofing = responseData.findProjects.filter(
          (x) => x.type === "roofing"
        );
        const sieveSiding = responseData.findProjects.filter(
          (x) => x.type === "siding"
        );
        const sieveCarpentry = responseData.findProjects.filter(
          (x) => x.type === "carpentry"
        );

        console.log(sieveSiding);
        setRoofingProjects(sieveRoofing);
        setCarpentryProjects(sieveCarpentry);
        setSidingProjects(sieveSiding);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [sendRequest]);

  return (
    <div>
      <div className="home">
        <img
          className="home-img"
          src={titleImg}
          alt="fintastic roofing carpentry and shingles, go with us!"
        />
        <img
          className="home-shark"
          src={fintasticShark}
          alt="Let fintastic serve you!"
        />

        {auth.token && (
          <div onClick={toggleDashboard} className="home-dashBoard">
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
            <IoDuplicateOutline style={{ stroke: "url(#blue-gradient)" }} />
          </div>
        )}
        <div className="home-aboutUs">
          <div className="home-cBox italicFont">
            {/* <label className="italicFont"> - Fintastic - </label> */}
            Let us serve you <br /> New England!
            <br /> We're <br /> - Fintastic -
            {/* <br />{" "}
            Carpentry, Roofing <br /> and Siding! */}
          </div>
          <Link to="/consultation">
            <div className="home-aboutUs-consultation">consultation</div>
          </Link>
        </div>

        <div className="home-mobileCatagories">
          <div className="home-carpentry">
            <span className="tie-left"></span>
            carpentry <span className="tie-right"></span>
          </div>

          <div className="home-roofing">
            {" "}
            <span className="tie-left"></span>
            roofing <span className="tie-right"></span>
          </div>
          {/* <div className="home-siding">
            <span className="tie-left"></span> siding{" "}
            <span className="tie-right"></span>{" "}
          </div> */}
        </div>
      </div>

      {roofingProjects && roofingProjects.length > 0 && (
        <div className="home-roofingBlock">
          <RoofingProjectsList items={roofingProjects} />
        </div>
      )}
      {sidingProjects && sidingProjects.length > 0 && (
        <div className="home-sidingBlock">
          <SidingProjectsList items={sidingProjects} />
        </div>
      )}
      {carpentryProjects && carpentryProjects.length > 0 && (
        <div className="home-carpentryBlock">
          <CarpentryProjectsList items={carpentryProjects} />
        </div>
      )}
    </div>
  );
};

export default Home;
