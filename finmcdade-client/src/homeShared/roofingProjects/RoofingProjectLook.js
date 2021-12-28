import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router";

import { useHttpClient } from "../../shared/hooks/http-hook";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

//import "bootstrap/dist/css/bootstrap.min.css";

const RoofingProjectLook = () => {
  const projectId = useParams().rId;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //   const [slideIndex, setSlideIndex] = useState(1);

  //   const slides = document.getElementsByClassName("projectLook-carousel");

  const [roofing, setRoofing] = useState();

  useEffect(() => {
    const fetchAProject = async () => {
      const requestData = await sendRequest(
        `http://localhost:5000/api/global/getAProject/${projectId}`
      );
      setRoofing(requestData.findProject);
    };
    fetchAProject();
  }, [sendRequest, projectId]);

  return (
    <div className="use-bootstrap">
      <div className="projectLook">
        <div className="projectLook-box">
          <div>
            {roofing && (
              <div className="projectLook-carousel-box">
                <Carousel variant="dark">
                  <Carousel.Item interval={100000000}>
                    <div className="projectLook-carousel-box">
                      <img
                        className="d-block w-75 projectLook-carousel"
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
                <span className="inlineBlock">description: </span>{" "}
                <p className="inlineBlock">{roofing.description}</p>
                <div>
                  {roofing.materialsUsed.map((x) => (
                    <div>
                      <h2 className="inlineBlock">{x.name} </h2>
                      {"    "}
                      <h2 className="inlineBlock">{x.dimensions}</h2>
                    </div>
                  ))}
                  <span> </span>
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
