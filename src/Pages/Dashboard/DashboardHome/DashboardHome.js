import React from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  return (
    <div>
      <Container>
        <h1 className="display-6 my-4 py-3">
          Welcome {user?.displayName} This is dashboard Click Side Navbar To See
          all Info
        </h1>
      </Container>
    </div>
  );
};

export default DashboardHome;
