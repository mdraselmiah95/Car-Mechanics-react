import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} />
        <input {...register("description")} />
        <input type="number" {...register("price")} />
        <input {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
