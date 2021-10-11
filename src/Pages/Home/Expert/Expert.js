import React from "react";

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div>
      <img src={img} alt="photos" />
      <h3>{name}</h3>
      <h4>{expertize}</h4>
    </div>
  );
};

export default Expert;
