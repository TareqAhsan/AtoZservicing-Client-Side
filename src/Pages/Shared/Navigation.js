import React from "react";
import { useNavigate } from "react-router";
import { Container, Nav, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = () => {
  const navigate = useNavigate();
  const { allContext } = useAuth();
  const { user, logout } = allContext;
  const handlelogout = () => {
    logout(navigate);
  };
  return (
    <Navbar sticky="top" collapseOnSelect bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">AToZ Service</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              services
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                   Dashboard
                </Nav.Link>
                <Nav.Link>{user?.displayName}</Nav.Link>
                {/* <Nav.Link> */}
                  <Button onClick={handlelogout}>Logout</Button>
                {/* </Nav.Link> */}
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button>Login</Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
