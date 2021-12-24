import React from "react";
import SidingProjectsItem from "./SidingProjectsItem";

const SidingProjectsList = (props) => {
  return (
    <div className="home-roofingBlock-listBlock">
      <div className="home-roofingBlock-listBlock-title">
        <h1>Siding</h1>
      </div>
      {props.items.map((x) => (
        <SidingProjectsItem
          key={x._id}
          _id={x._id}
          description={x.description}
          materialsUsed={x.materialsUsed}
          coverPhotoBucketId={x.coverPhotoBucketId}
          photosPhotoBucketIds={x.photosPhotoBucketIds}
        />
      ))}
    </div>
  );
};

export default SidingProjectsList;
