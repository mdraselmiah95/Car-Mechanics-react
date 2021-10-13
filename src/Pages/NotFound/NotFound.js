import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-danger fw-bold">Page not found</h2>
      <img src={notfound} alt="notfound" className="img-fluid" /> <br />
      <Link to="/home">
        <button className="btn btn-outline-primary">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
