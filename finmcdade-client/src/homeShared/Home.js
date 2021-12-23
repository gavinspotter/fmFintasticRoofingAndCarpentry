import React, { useContext, useEffect, useState } from "react";

import titleImg from "../img/fintastic_home.jpeg";
import "../css/style.css";
import { IoCreateOutline, IoDuplicateOutline } from "react-icons/io5";
import { AuthContext } from "../shared/context/auth-context";
import { useNavigate } from "react-router";

import { useHttpClient } from "../shared/hooks/http-hook";
import RoofingProjectsList from "./roofingProjects/RoofingProjectsList";

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
    console.log("hi");
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/global/getProjects`
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
        setRoofingProjects(sieveRoofing);
        setCarpentryProjects(sieveCarpentry);
        setSidingProjects(sieveCarpentry);
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
          className="home"
          src={titleImg}
          alt="fintastic roofing carpentry and shingles, go with us!"
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

      {roofingProjects && (
        <div className="">
          <RoofingProjectsList />
        </div>
      )}
    </div>
  );
};

export default Home;
