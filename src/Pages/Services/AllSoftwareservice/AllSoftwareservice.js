import React from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';

const AllSoftwareservice = () => {
    const {softservices} = useAuth()
    return (
        <div>
             <Row xs={1} md={2} lg={3} className="g-4">
          {softservices?.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
        </div>
    );
};

export default AllSoftwareservice;