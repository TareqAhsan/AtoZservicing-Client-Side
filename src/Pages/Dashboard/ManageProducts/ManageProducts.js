
import React, { useState } from "react";
import { Container,Badge } from "react-bootstrap";

import ManageITService from "../ManageITService/ManageITService";
import ManageSoftwareService from "../ManageSoftwareService/ManageSoftwareService";
const ManageProducts = () => {

  const [state, setState] = useState("it");
  return (
    <div>
      <Container>
        <h1 className="display-5 text-uppercase py-4">
          Manage Your Services here
        </h1>
        <Badge pill bg="info" className="btn m-1" onClick={()=>setState('it')}>
        IT Service
        </Badge>
        <Badge pill bg="primary" className="btn" onClick={()=>setState('soft')}>
        Software Service
        </Badge>
        {state==='it' && <ManageITService/>}
        {state==='soft' && <ManageSoftwareService/>}
      </Container>
    </div>
  );
};

export default ManageProducts;
