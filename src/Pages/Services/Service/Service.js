import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const Service = ({ service }) => {
  const { serviceName, image, price, description, _id } = service;
  return (
    // <Col>
    <Zoom bottom>
      {/* <div className="shadow-lg h-100"> */}
      <Card
        className="h-100 border-0 rounded-3 shadow m-2"
        style={{ borderRadius: "30px" }}
      >
        <Card.Img
          className="rounded-3"
          variant="top"
          src={image}
          style={{ height: "270px" }}
        />
        <Card.Body>
          <Card.Title className="m-0 fs-5 text-danger">
            {serviceName}
          </Card.Title>
          <Card.Title className=" fs-6 text-danger">
            serviceCharge: {price}TK
          </Card.Title>
          <Card.Text className="text-start">
            {description.slice(0, 200)}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white rounded-3">
          <Link to={`/book/${_id}`}>
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
  );
};

export default Service;
