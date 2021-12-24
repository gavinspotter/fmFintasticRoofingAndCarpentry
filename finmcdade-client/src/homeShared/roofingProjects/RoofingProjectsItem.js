import React from "react";

const RoofingProjectsItem = (props) => {
  return (
    <div className="home-roofingBlock-itemBlock">
      <div className="inlineBlock">
        <img
          className="home-roofingBlock-itemBlock-img"
          src={`https://s3.us-east-1.amazonaws.com/fintasticbucket/${props.coverPhotoBucketId}`}
          alt={props.details}
        />
      </div>
      <div className="inlineBlock">
        <div>{props.description}</div>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default RoofingProjectsItem;
