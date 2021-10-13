import React from "react";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <img src={notfound} alt="notfound" />
    </div>
  );
};

export default NotFound;
