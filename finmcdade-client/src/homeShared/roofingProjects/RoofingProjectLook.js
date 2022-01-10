import React, { useContext, useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  IoAddCircleOutline,
  IoAddOutline,
  IoArrowBackOutline,
  IoBackspaceOutline,
} from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

import { useHttpClient } from "../../shared/hooks/http-hook";
import ConfirmationModal from "../../shared/UIElements/ConfirmationModal";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

//import "bootstrap/dist/css/bootstrap.min.css";

const RoofingProjectLook = () => {
  const projectId = useParams().rId;

  const navigate = useNavigate();

  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //   const [slideIndex, setSlideIndex] = useState(1);

  //   const slides = document.getElementsByClassName("projectLook-carousel");

  const [roofing, setRoofing] = useState();

  const deleteProject = async () => {
    try {
      await sendRequest(
        `http://localhost:5000/api/admin/deleteProject/${projectId}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
      navigate("/");
    } catch (err) {}
  };

  useEffect(() => {
    const fetchAProject = async () => {
      const requestData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/global/getAProject/${projectId}`
      );
      setRoofing(requestData.findProject);
    };
    fetchAProject();
  }, [sendRequest, projectId]);

  const [test, setTest] = useState("projectLook-displayNone");

  const aTest = () => {
    if (test === "projectLook-displayNone") {
      setTest("projectLook-modal");
    } else if (test === "projectLook-modal") {
      setTest("projectLook-displayNone");
    }
  };

  return (
    <div className="use-bootstrap">
      <div className={`${test}`}>
        <div className="projectLook-modal-header">Are you sure?</div>
        <div className="projectLook-modal-buttons" onClick={deleteProject}>
          yes
        </div>
        <div className="projectLook-modal-buttons" onClick={aTest}>
          no
        </div>
      </div>
      <div className="projectLook">
        <Link to="/">
          <div className="projectLook-goBack">
            <IoArrowBackOutline />
          </div>
        </Link>
        <div className="projectLook-box">
          {auth.token && (
            <div className="projectLook-deleteButton" onClick={aTest}>
              <IoBackspaceOutline />
            </div>
          )}

          <div>
            {roofing && (
              <div className="projectLook-carousel-box">
                <Carousel variant="dark">
                  <Carousel.Item interval={100000000}>
                    <div className="projectLook-carousel-box">
                      <img
                        className="d-block projectLook-carousel"
                        src={`https://s3.us-east-1.amazonaws.com/cloversoftwaredevbucket/${roofing.coverPhotoBucketId}`}
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                  {roofing.photosPhotoBucketIds.map((x, index) => (
                    <Carousel.Item interval={100000000}>
                      <div key={x} className="projectLook-carousel-box">
                        <img
                          className="d-block projectLook-carousel"
                          src={`https://s3.us-east-1.amazonaws.com/cloversoftwaredevbucket/${x}`}
                          alt="First slide"
                        />
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
          {roofing && (
            <div>
              <div className="projectLook-text-job">
                {/* <div className="projectLook-listText">
                  {" "}
                  Do you like this job? Add it to your list and we'll bring it
                  up during your free consultation.{" "}
                  <div className="projectLook-addToList">
                    <IoAddCircleOutline />{" "}
                  </div>{" "}
                </div>
                
                <div className="projectLook-line">
                  {" "}
                  <hr />{" "}
                </div>
                <div></div> */}

                {/* <span className="inlineBlock">description: </span>{" "} */}
                <p className="inlineBlock">{roofing.description}</p>
                <div>
                  {roofing.materialsUsed.map((x) => (
                    <div key={x.name}>
                      <h2 className="inlineBlock">{x.name} </h2>
                      {"    "}
                      <h2 className="inlineBlock">{x.dimensions}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoofingProjectLook;
