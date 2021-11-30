import React, { useState } from "react";
import { Alert, Container, Spinner,Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const [loadedinfo, setLoadedinfo] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { allContext } = useAuth();

  const { login, error, user, loading,googleSignin } = allContext;
  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newVal = { ...loadedinfo };
    newVal[field] = value;
    setLoadedinfo(newVal);
    console.log(loadedinfo)
  };
  const handleSubmit = (e) => {
    login(loadedinfo.email, loadedinfo.password, navigate, location);
    e.preventDefault();
  };

  const handleGoogle = ()=>{
    googleSignin(navigate,location)
  }
  return (
    <div>
      <Container className="my-4">
        <form onSubmit={handleSubmit} className="shadow p-4">
          <div className="form-floating mb-3">
            <input
              type="email"
              onBlur={handleonBlur}
              name="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onBlur={handleonBlur}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              className="form-control my-3 btn btn-primary"
            />
          </div>
          <Link to="/register">
            {" "}
            <p>New User ? please Register</p>
          </Link>
          <Button onClick={handleGoogle}>SignInWithGoogle</Button>
        </form>
        {loading && <Spinner variant="primary"></Spinner>}
        {error && <Alert variant="danger">{error}</Alert>}
      </Container>
    </div>
  );
};

export default Login;
