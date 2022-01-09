import React, { useContext, useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  IoAddCircleOutline,
  IoAddOutline,
  IoArrowBackOutline,
  IoBackspaceOutline,
} from "react-icons/io5";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";

import { useHttpClient } from "../../shared/hooks/http-hook";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

//import "bootstrap/dist/css/bootstrap.min.css";

const RoofingProjectLook = () => {
  const projectId = useParams().rId;

  const auth = useContext(AuthContext);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //   const [slideIndex, setSlideIndex] = useState(1);

  //   const slides = document.getElementsByClassName("projectLook-carousel");

  const [roofing, setRoofing] = useState();

  const deleteProject = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/admin/deleteProject/${projectId}`,
        "DELETE",
        null,
        {
          Authorization: "Bearer " + auth.token,
        }
      );
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

  return (
    <div className="use-bootstrap">
      <div className="projectLook">
        <Link to="/">
          <div className="projectLook-goBack">
            <IoArrowBackOutline />
          </div>
        </Link>
        <div className="projectLook-box">
          {/* <div>
            <IoBackspaceOutline/>
            </div> */}
          <div>
            {roofing && (
              <div className="projectLook-carousel-box">
                <Carousel variant="dark">
                  <Carousel.Item interval={100000000}>
                    <div className="projectLook-carousel-box">
                      <img
                        className="d-block projectLook-carousel"
                        src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${roofing.coverPhotoBucketId}`}
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                  {roofing.photosPhotoBucketIds.map((x, index) => (
                    <Carousel.Item interval={100000000}>
                      <div className="projectLook-carousel-box">
                        <img
                          className="d-block projectLook-carousel"
                          src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${x}`}
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
                    <div>
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
