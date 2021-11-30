import axios from "axios";
import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [added, setadded] = useState();
  const [success, setSuccess] = useState(false);
  const { allContext } = useAuth();
  const { token } = allContext;

  const handleblur = (e) => {
    setadded(e.target.value);
  };
  const handlesubmit = (e) => {
    const body = { email: added };
    axios
      .put(
        `https://ancient-anchorage-18628.herokuapp.com/users/makeadmin`,
        body,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        console.log(result.data.modifiedCount);
        if (result.data.modifiedCount) {
          setSuccess(true);
          e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <Container>
        <h1 className="display-5 py-4"> Make An Admin</h1>
        {success && (
          <Alert>You have Added {added} as an Admin Successfully</Alert>
        )}
        <form
          onSubmit={handlesubmit}
          className="shadow p-4"
          style={{ borderRadius: "12px" }}
        >
          <input
            type="email"
            onBlur={handleblur}
            className="form-control m-3 w-75 mx-auto"
          />
          <input
            type="submit"
            value="Add"
            className="form-control m-3 w-75 btn btn-warning"
          />
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
