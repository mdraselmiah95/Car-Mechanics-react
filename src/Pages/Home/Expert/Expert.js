import React from "react";

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default Expert;
