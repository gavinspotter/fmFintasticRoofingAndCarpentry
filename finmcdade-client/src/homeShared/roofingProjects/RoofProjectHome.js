import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";

import RoofingProjectsList from "./RoofingProjectsList";

const RoofProjectHome = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [roofingProjects, setRoofingProjects] = useState();

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/global/getProjects`
        );

        const sieveRoofing = responseData.findProjects.filter(
          (x) => x.type === "roofing"
        );

        setRoofingProjects(sieveRoofing);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, [sendRequest]);

  return (
    <div className="home-roofingBlock">
      {roofingProjects && <RoofingProjectsList items={roofingProjects} />}
    </div>
  );
};

export default RoofProjectHome;
