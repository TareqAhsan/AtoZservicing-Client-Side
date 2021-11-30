import React from 'react';
import { Container, Row } from "react-bootstrap";
import useAuth from '../../../hooks/useAuth';
import Service from "../Service/Service";
const AllITservice = () => {
    const {services} = useAuth()
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">
          {services?.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
        </div>
    );
};

export default AllITservice;