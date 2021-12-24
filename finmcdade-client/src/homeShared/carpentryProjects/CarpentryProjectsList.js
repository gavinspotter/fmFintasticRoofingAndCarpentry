import React from "react";
import CarpentryProjectsItem from "./CarpentryProjectsItem";

const CarpentryProjectsList = (props) => {
  return (
    <div className="home-roofingBlock-listBlock">
      <div className="home-roofingBlock-listBlock-title">
        <h1>carpentry</h1>
      </div>
      {props.items.map((x) => (
        <CarpentryProjectsItem
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

export default CarpentryProjectsList;
