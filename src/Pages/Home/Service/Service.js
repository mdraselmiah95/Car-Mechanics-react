import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  //   console.log(props);
  const { name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="photos" />
      <h3 className="my-3">{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <button className="btn btn-outline-info my-3">
        Book {name.toLowerCase()}
      </button>
    </div>
  );
};

export default Service;
