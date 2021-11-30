import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddExperts = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, image, expertise } = data;
    if (!image) {
      return;
    }
    console.log(image[0]);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("expertise", expertise);
    formData.append("image", image[0]);
    fetch("https://ancient-anchorage-18628.herokuapp.com/experts", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        if (result.insertedId) {
          toast.success("Expert Added Successfully");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Container className="py-4">
        <Toaster position="top-center" reverseOrder={true} />
        <h1 className="display-6">Add Experts</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow p-4">
          <input
            {...register("name")}
            className="form-control mb-2"
            placeholder="name"
            required
          />
          <input
            placeholder="expertise"
            {...register("expertise", { required: true })}
            className="form-control mb-2"
          />
          {errors.expertise && <span>This field is required</span>}
          <input
            accept="image/*"
            {...register("image")}
            className="form-control mb-2"
            type="file"
            onChange={(e) => console.log(e.target.files[0])}
          />
          <input type="submit" className="form-control btn btn-warning" />
        </form>
      </Container>
    </div>
  );
};

export default AddExperts;
