import React from "react";

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="border p-2 m-2 rounded">
        <img src={img} alt="photos" className="rounded" />
        <h3>{name}</h3>
        <h4>{expertize}</h4>
      </div>
    </div>
  );
};

export default Expert;
