import React, { useState } from "react";
import FeatureServices from "../FeatureServices";
import {Badge} from 'react-bootstrap'
import SoftwareService from "../../SoftwareService/SoftwareService";
const FeatureType = () => {
  const [state, setState] = useState("it");
  // const handleClick = () => {
  //   setState(!state);
  // };


  return (
    <div>
      <h1 className="display-5 py-5">Our Feature Services</h1>
      <Badge pill bg="info" className="btn m-1" onClick={()=>setState('it')}>
        IT Service
        </Badge>
        <Badge pill bg="primary" className="btn" onClick={()=>setState('soft')}>
        Software Service
        </Badge>
      {state==='it' &&  <FeatureServices/>}
      {state==='soft' && <SoftwareService/>}
    </div>
  );
};

export default FeatureType;
