import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router";
import Slider from "react-slick";

import { useHttpClient } from "../../shared/hooks/http-hook";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

//import "bootstrap/dist/css/bootstrap.min.css";

const RoofingProjectLook = () => {
  const projectId = useParams().rId;

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projectLook">
      <div className="projectLook-box">
        {/* {roofing && (
          <div>
            <img
              className="projectLook-carousel"
              src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${roofing.coverPhotoBucketId}`}
              alt="First slide"
            />
            {roofing.photosPhotoBucketIds.map((x) => (
              <div>
                <img
                  className="projectLook-carousel"
                  src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${x}`}
                  alt="First slide"
                />

                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            ))}

            <div>{roofing.type}</div>
          </div>
        )} */}

        <Slider>
          <h1>hi</h1>
          <h1>hello</h1>
        </Slider>

        {/* {roofing && (
          <Slider>
            <div>
              <img
                className="projectLook-carousel"
                src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${roofing.coverPhotoBucketId}`}
                alt="First slide"
              />
            </div>
            {roofing.photosPhotoBucketIds.map((x, index) => (
              <img
                className="projectLook-carousel"
                src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${x}`}
                alt="First slide"
              />
            ))}
          </Slider>
        )} */}

        {/* {roofing && (
          <section className="carousel" aria-label="Gallery">
            <ol className="carousel__viewport">
              <li id={`carousel__slide-1`} tabindex="0" class="carousel__slide">
                <div className="carousel__snapper">
                  <a
                    href={`#carousel__slide${
                      roofing.photosPhotoBucketIds.length - 1
                    }`}
                    className="carousel__prev"
                  >
                    prev
                  </a>
                  <img
                    className="projectLook-carousel"
                    src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${roofing.coverPhotoBucketId}`}
                    alt="First slide"
                  />

                  <a className="carousel__next" href="#carousel__slide0">
                    next
                  </a>
                </div>
              </li>
              {roofing.photosPhotoBucketIds.map((x, index) => (
                <li
                  id={`carousel__slide${index}`}
                  tabindex="0"
                  className="carousel__slide"
                >
                  <div className="carousel__snapper"></div>
                  <a
                    className="carousel__prev"
                    href={`#carousel__slide${index - 1}`}
                  >
                    go to previous slide
                  </a>
                  <img
                    className="projectLook-carousel"
                    src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${x}`}
                    alt="First slide"
                  />
                  <a
                    href={`#carousel__slide${
                      index === roofing.photosPhotoBucketIds.length - 1
                        ? "-1"
                        : index + 1
                    }`}
                    className="carousel__next projectLook-carousel-navBttn"
                  >
                    Go to next slide
                  </a>
                </li>

                //   <div>
                //     <img
                //       className="projectLook-carousel"
                //       src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${x}`}
                //       alt="First slide"
                //     />

                //     <h3>First slide label</h3>
                //     <p>
                //       Nulla vitae elit libero, a pharetra augue mollis interdum.
                //     </p>
                //   </div>
              ))}
            </ol>
          </section>
        )} */}
      </div>
    </div>
  );
};

export default RoofingProjectLook;
