import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Zoom from "react-reveal/Zoom";

const SoftwareService = () => {
  const { softservices } = useAuth();
  return (
    <div>
      <Container className="mb-4">
        <h3 className="display-6 py-5">Our Services Software</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {softservices?.slice(0, 6).map((service) => (
            // <Col >
              <Zoom bottom key={service._id}>
                <Card
                  className="h-100 border-0 rounded-3 shadow m-2"
                  style={{ borderRadius: "30px" }}
                >
                  <Card.Img
                    className="rounded-3"
                    variant="top"
                    src={service.image}
                    style={{ height: "270px" }}
                  />
                  <Card.Body>
                    <Card.Title className="m-0 fs-5 text-danger">
                      {service.serviceName}
                    </Card.Title>
                    <Card.Title className=" fs-6 text-danger">
                      serviceCharge: {service.price}TK
                    </Card.Title>
                    <Card.Text className="text-start">
                      {service.description.slice(0, 200)}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="border-0 bg-white rounded-3">
                    <Link to={`/book/${service._id}`}>
                      <Button
                        variant="warning"
                        className="w-100"
                        style={{ borderRadius: "15px" }}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </Card.Footer>
                </Card>
              </Zoom>
            // </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SoftwareService;
