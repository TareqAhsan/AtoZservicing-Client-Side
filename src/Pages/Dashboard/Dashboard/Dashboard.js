import React from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { allContext } = useAuth();
  const { user, logout, admin } = allContext;
  const handleLogout = () => {
    logout(navigate);
  };
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container>
          <Navbar.Brand href="#">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                className="text-danger mx-auto"
              >
                {user?.displayName}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/dashboard">
                  <Button variant="success" className="w-100">
                    Dashboard
                  </Button>
                </Nav.Link>
                {admin ? (
                  <>
                    <Nav.Link as={Link} to="/dashboard/makeAdmin">
                      <Button variant="success" className="w-100">
                        Make Admin
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/addservice">
                      <Button variant="success" className="w-100">
                        Add Service
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/addexperts">
                      <Button variant="success" className="w-100">
                        Add Experts
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/manageproduct">
                      <Button variant="success" className="w-100">
                        Manage Product
                      </Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/dashboard/manageallorder">
                      <Button variant="success" className="w-100">
                        Manage AllOrder
                      </Button>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/dashboard/mybookings">
                      <Button variant="success" className="w-100">
                        My Bookings
                      </Button>
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/dashboard/payment">
                      <Button variant="success" className="w-100">
                        Payment
                      </Button>
                    </Nav.Link> */}
                    <Nav.Link as={Link} to="/dashboard/review">
                      <Button variant="success" className="w-100">
                        Review
                      </Button>
                    </Nav.Link>
                  </>
                )}
                <Nav.Link as={Link} to="/">
                  <Button variant="warning" className="w-100">
                    Home
                  </Button>
                </Nav.Link>
                <Nav.Link>
                  <Button
                    onClick={handleLogout}
                    variant="warning"
                    className="w-100"
                  >
                    Logout
                  </Button>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Dashboard;
