import React from "react";
import { IoImagesOutline } from "react-icons/io5";

const SidingProjectsItem = (props) => {
  return (
    <div className="home-roofingBlock-itemBlock">
      <div className="inlineBlock verticalAlign">
        <div className="home-roofingBlock-itemBlock-imgBlock">
          <img
            className="home-roofingBlock-itemBlock-imgBlock-img"
            src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${props.coverPhotoBucketId}`}
            alt={props.details}
          />
        </div>
      </div>
      <div className="home-roofingBlock-itemBlock-text inlineBlock verticalAlign">
        <p>{props.description}</p>

        {/* <div>
              {props.materialsUsed.map((x) => (
                <div>
                  <span>{x.name}</span>
                  <span>{x.dimensions}</span>
                </div>
              ))}
            </div>
            <div>
              {props.photosPhotoBucketIds.map((x) => (
                <div>{x}</div>
              ))}
            </div> */}
      </div>
      {props.photosPhotoBucketIds.length > 0 && (
        <div className="cardTie-bottom-right">
          <div className="cardTie-bottom-right-font">
            +{props.photosPhotoBucketIds.length} <IoImagesOutline />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidingProjectsItem;
