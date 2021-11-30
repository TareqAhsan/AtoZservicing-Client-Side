import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
const Addservice = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   const [add, setAdd] = useState();
  const onSubmit = (data) => {
    console.log(data);
    // const { serviceName, description, image, price } = data;
    // const
    // const formData = new FormData();
    // formData.append("serviceName", serviceName);
    // formData.append("description", description);
    // formData.append("price", price);
    // formData.append("image", image[0]);
    fetch("https://ancient-anchorage-18628.herokuapp.com/addservice", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Service Added Successfully");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1 className="my-4 display-5">Add A Service</h1>
      <Toaster position="top-center" reverseOrder={true} />
      <Container className="my-4">
        <form onSubmit={handleSubmit(onSubmit)} className="shadow p-4">
          <input
            className="form-control mb-2"
            {...register("serviceName")}
            placeholder="service name"
          />
          <input
            className="form-control mb-2"
            {...register("category")}
            placeholder="service category"
          />

          <input
            className="form-control mb-2"
            {...register("description", { required: true })}
            placeholder="description"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="form-control mb-2"
            {...register("price", { required: true })}
            placeholder="price"
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="form-control mb-2"
            {...register("image")}
            placeholder="Enter image url"
          />

          <input
            className="form-control mb-2 btn btn-primary"
            type="submit"
            value="Add"
          />
        </form>
      </Container>
    </div>
  );
};

export default Addservice;
