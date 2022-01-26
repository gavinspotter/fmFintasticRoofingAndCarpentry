import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

        console.log(sieveSiding);

        setCarpentryProjects(sieveCarpentry);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [sendRequest]);

  return (
    <div className="home-carpentryBlock">
      {carpentryProjects && <CarpentryProjectsList items={carpentryProjects} />}
      {!carpentryProjects.length && (
        <div className="home-carpentryBlock-none">
          No Carpentry Projects at this time.
        </div>
      )}
    </div>
  );
};

export default CarpentryProjectHome;
