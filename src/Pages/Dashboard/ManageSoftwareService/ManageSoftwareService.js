import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const ManageSoftwareService = () => {
  const { softservices } = useAuth();

  const handleDelete = (id) => {
    const agreed = window.confirm("Do you Want to Delete   this  service?");
    if (agreed) {
      axios
        .delete(
          `https://ancient-anchorage-18628.herokuapp.com/manageservice/${id}`
        )
        .then((result) => {
          if (result.data.deletedCount > 0) {
            toast.success("service deleted Successfully");
          }
        });
    }
  };
  return (
    <div>
      <Container className="py-4">
        <Toaster position="top-center" reverseOrder={true} />
        <Row xs={1} md={2} lg={2} className="g-4">
          {softservices?.map((service) => (
            <Col key={service._id}>
              <div
                className="card mb-3 h-100 border-0 shadow"
                style={{ maxwidth: "540px", borderRadius: "15px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={service.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-danger">
                        {service.serviceName}
                      </h5>
                      <p className="card-text fs-5 fw-bold text-danger">
                        {service?.price}Taka
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          <Button
                            onClick={() => handleDelete(service._id)}
                            variant="danger"
                          >
                            Delete This Service
                          </Button>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageSoftwareService;
