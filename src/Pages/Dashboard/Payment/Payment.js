import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import Elements from
const stripePromise = loadStripe(
  "pk_test_51JvpkABU3D6PI3NFkuDC9rCpFVrWoPaUFtsrgfS546C9DH7OefGFFN8JVRQF6if1EZ4Nb225YfvVYpYdFYfIMihm00zlD1PIUY"
);
const Payment = () => {
  const { bookingid } = useParams();
  const [singlepay, setSinglepay] = useState();
  useEffect(() => {
    axios(
      `https://ancient-anchorage-18628.herokuapp.com/bookings/${bookingid}`
    ).then((result) => {
      setSinglepay(result.data);
    });
  }, [bookingid]);
  return (
    <Container>
      <h4 className="display-5 py-4">
        Please Pay For : {singlepay?.serviceName}
      </h4>
      <p>Pay $ {singlepay?.price}</p>
      {singlepay?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm singlepay={singlepay} />
        </Elements>
      )}
    </Container>
  );
};

export default Payment;
