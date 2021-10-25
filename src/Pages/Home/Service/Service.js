import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  //   console.log(props);
  const { _id, name, price, description, img } = service;
  return (
    <ScrollAnimation animateIn="animate__fadeInRightBig" delay="300">
      <div className="service">
        <img src={img} alt="photos" />

        <h3 className="my-3">{name}</h3>
        <h5>Price: {price}</h5>
        <p className="px-3">{description}</p>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-outline-info my-3">
            Book {name.toLowerCase()}
          </button>
        </Link>
      </div>
    </ScrollAnimation>
  );
};

export default Service;
