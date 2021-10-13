import React from "react";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-danger fw-bold">Page not found</h2>
      <img src={notfound} alt="notfound" className="img-fluid" />
    </div>
  );
};

export default NotFound;
