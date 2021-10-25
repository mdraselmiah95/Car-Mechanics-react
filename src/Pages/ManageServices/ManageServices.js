import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div>
      <h2 className="text-info fw-bolder">
        Manage Service No: {services.length}
      </h2>
      {services.map((service) => (
        <div key={service._id} className="border m-3 p-2 rounded">
          <div className="container">
            <h4>{service.name}</h4>
            <button
              onClick={() => handleDelete(service._id)}
              className="btn btn-outline-danger"
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
