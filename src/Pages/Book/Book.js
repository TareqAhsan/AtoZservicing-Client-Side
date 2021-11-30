import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Shared/Navigation";
import toast, { Toaster } from "react-hot-toast";

const Book = () => {
  const { id } = useParams();
  const { allContext } = useAuth();
  const { user } = allContext;
  const [singleData, setSingleData] = useState();
  const [spin, setSpin] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Are you sure to confirm booking?");
    if (proceed) {
      data.image = singleData?.image;
      data.status = "pending";
      data.price = singleData?.price;
      data.serviceName = singleData.serviceName;
      console.log(data);
      axios
        .post("https://ancient-anchorage-18628.herokuapp.com/addbooking", data)
        .then((result) => {
          if (result.data.insertedId) {
            toast.success(`${user.displayName} you have booked Successfully`);
            reset();
          }
        });
    }
  };
  useEffect(() => {
    axios(`https://ancient-anchorage-18628.herokuapp.com/services/${id}`).then(
      (result) => setSingleData(result.data),
      setSpin(false)
    );
  }, [id]);
  return (
    <div>
      <Navigation />
      <h1 className="my-4 py-4 display-6">
        Book {singleData?.serviceName} here
      </h1>

      <Container>
        <Toaster className="my-4" position="top-center" reverseOrder={true} />
        {spin ? (
          <Spinner
            animation="grow"
            variant="info"
            style={{ width: "3rem", height: "3rem" }}
          />
        ) : (
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <div
                className="card mb-3 border-0 shadow p-2"
                style={{ maxWidth: "540px", borderRadius: "13px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={singleData?.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{singleData?.serviceName}</h5>
                      <p className="card-text">
                        {singleData?.description.slice(0, 150)}
                      </p>
                      <p className="card-text text-danger">
                        Service Charge: {singleData?.price}taka
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow p-4"
                style={{ borderRadius: "12px" }}
              >
                <input
                  defaultValue={user?.displayName}
                  {...register("displayName")}
                  className="form-control  mb-3"
                  readOnly
                />

                <input
                  defaultValue={user?.email}
                  {...register("email")}
                  className="form-control mb-3"
                  readOnly
                />

                <input
                  {...register("address", { required: true })}
                  className="form-control mb-3"
                  placeholder="Enter address"
                />
                <input
                  {...register("phoneNo", { required: true })}
                  className="form-control mb-3"
                  placeholder="Enter Phone No"
                />

                <input
                  type="submit"
                  value="confirm booking"
                  className="form-control mb-3 btn btn-primary"
                />
              </form>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Book;
