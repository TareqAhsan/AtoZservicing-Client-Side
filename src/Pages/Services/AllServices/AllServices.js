import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from "../Service/Service";
import { Row, Spinner } from "react-bootstrap";
const AllServices = () => {
  const [allservices, setAllservices] = useState();
  const handleChange = (e) => {
    const search = e.target.value;
    axios(
      `https://ancient-anchorage-18628.herokuapp.com/addservice/search?val=${search}`
    ).then((result) => setAllservices(result.data));
  };
  useEffect(() => {
    axios(`https://ancient-anchorage-18628.herokuapp.com/addservice/all`).then(
      (result) => setAllservices(result.data)
    );
  }, []);
  return (
    <div>
      {!allservices?.length && (
        <Spinner
          animation="grow"
          variant="info"
          style={{ height: "3rem", width: "3rem" }}
        ></Spinner>
      )}
      <input
        onChange={handleChange}
        type="text"
        name="service"
        className="form-control my-3"
        style={{ borderRadius: "8px" }}
        placeholder="search It and software category services here"
      />

      <Row xs={1} md={2} lg={3} className="g-4">
        {allservices?.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default AllServices;
