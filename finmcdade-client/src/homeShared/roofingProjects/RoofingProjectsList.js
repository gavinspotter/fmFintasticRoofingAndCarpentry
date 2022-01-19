import React from "react";
import RoofingProjectsItem from "./RoofingProjectsItem";

import "../../css/style.css";

const RoofingProjectsList = (props) => {
  return (
    <div className="home-roofingBlock-listBlock">
      <div className="home-roofingBlock-listBlock-title">
        <h1>Roofing</h1>
      </div>
      {props.items
        .map((x) => (
          <RoofingProjectsItem
            key={x._id}
            _id={x._id}
            description={x.description}
            materialsUsed={x.materialsUsed}
            coverPhotoBucketId={x.coverPhotoBucketId}
            photosPhotoBucketIds={x.photosPhotoBucketIds}
          />
        ))
        .reverse()}
    </div>
  );
};

export default RoofingProjectsList;
