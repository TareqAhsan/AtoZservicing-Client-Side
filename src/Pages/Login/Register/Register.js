import React from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { allContext } = useAuth();
  const { registerUser ,error,loading} = allContext;
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.password2) {
      alert("password mismatch");
      return;
    }
    registerUser(data.email, data.password, data.name, navigate);
    reset();
  };
  return (
    <div>
      <h1 className="my-4 display-5">Please Register</h1>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)} className="shadow  p-3 rounded-3">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name"
            className="form-control mb-2"
          />

          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            className="form-control mb-2"
          />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter password"
            className="form-control mb-2"
          />
          <input
            type="password"
            {...register("password2", { required: true })}
            placeholder="Enter password"
            className="form-control mb-2"
          />

          <input type="submit" className="form-control mb-2 btn btn-primary" />
          <Link to="/login">
            <p>Already register ? please Login</p>
          </Link>
        </form>
        {loading && <Spinner variant="primary"></Spinner>}
        {error && <Alert variant="danger">{error}</Alert>}
      </Container>
    </div>
  );
};

export default Register;
