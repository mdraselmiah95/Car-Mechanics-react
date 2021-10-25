import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="text-info fw-bolder">
        Manage Service No: {services.length}
      </h2>
      {services.map((service) => (
        <div key={service._id} className="border m-3 p-2 rounded">
          <div className="container">
            <h4>{service.name}</h4>
            <button className="btn btn-outline-danger">DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
