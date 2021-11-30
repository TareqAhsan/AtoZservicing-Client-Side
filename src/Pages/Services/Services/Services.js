import React, {  useEffect, useState } from "react";
import { Container, Badge } from "react-bootstrap";

import Navigation from "../../Shared/Navigation";
import AllITservice from "../AllITservice/AllITservice";
import AllServices from "../AllServices/AllServices";
import AllSoftwareservice from "../AllSoftwareservice/AllSoftwareservice";


const Services = () => {
  const [services, setServices] = useState("all");

  //  const {services} = useAuth()
 
  return (
    <div>
      <Navigation />
      <Container className="mb-4">
        <h1 className="display-5 py-4">Our services</h1>
        
        <Badge
          pill
          bg="success"
          className="btn m-1"
          onClick={() => setServices("all")}
        >
          All service
        </Badge>
        <Badge
          pill
          bg="info"
          className="btn m-1"
          onClick={() => setServices("it")}
        >
          IT Service
        </Badge>
        <Badge
          pill
          bg="primary"
          className="btn"
          onClick={() => setServices("soft")}
        >
          Software Service
        </Badge>
       
        {services === "all" && <AllServices/>}
        {services === "it" && <AllITservice />}
        {services === "soft" && <AllSoftwareservice />}
      </Container>
    </div>
  );
};

export default Services;
