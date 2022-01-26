import React, { useContext, useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import CarpentryProjectsList from "./CarpentryProjectsList";

const CarpentryProjectHome = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [carpentryProjects, setCarpentryProjects] = useState();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

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

        console.log(sieveCarpentry);
        //console.log(sieveSiding);

        setCarpentryProjects(sieveCarpentry);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [sendRequest]);

  return (
    <div className="home-carpentryBlock">
      <Link to="/">
        <div className="projectLook-goBack">
          <div className="fontSizeChange ">
            <IoArrowBackOutline />
          </div>
        </div>
      </Link>
      {carpentryProjects && <CarpentryProjectsList items={carpentryProjects} />}
      {carpentryProjects && carpentryProjects.length === 0 && (
        <div className="home-carpentryBlock-none">
          No Carpentry Projects at this time.
        </div>
      )}
    </div>
  );
};

export default CarpentryProjectHome;
