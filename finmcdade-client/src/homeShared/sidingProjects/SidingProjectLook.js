import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  IoAddCircleOutline,
  IoAddOutline,
  IoArrowBackOutline,
} from "react-icons/io5";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useHttpClient } from "../../shared/hooks/http-hook";

const SidingProjectLook = () => {
  const projectId = useParams().sId;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //   const [slideIndex, setSlideIndex] = useState(1);

  //   const slides = document.getElementsByClassName("projectLook-carousel");

  const [siding, setSiding] = useState();

  useEffect(() => {
    const fetchAProject = async () => {
      const requestData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/global/getAProject/${projectId}`
      );
      setSiding(requestData.findProject);
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
          <div>
            {siding && (
              <div className="projectLook-carousel-box">
                <Carousel variant="dark">
                  <Carousel.Item interval={100000000}>
                    <div className="projectLook-carousel-box">
                      <img
                        className="d-block projectLook-carousel"
                        src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${siding.coverPhotoBucketId}`}
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                  {siding.photosPhotoBucketIds.map((x, index) => (
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
          {siding && (
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
                </div> */}

                {/* <span className="inlineBlock">description: </span>{" "} */}
                <p className="inlineBlock">{siding.description}</p>
                <div>
                  {siding.materialsUsed.map((x) => (
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

export default SidingProjectLook;
