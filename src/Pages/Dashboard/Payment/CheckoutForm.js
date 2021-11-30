import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import axios from "axios";

const CheckoutForm = ({ singlepay }) => {
  // const {price} = singlepay
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://ancient-anchorage-18628.herokuapp.com/create-payment-intent",
        {
          price: singlepay?.price,
        }
      )
      .then((result) => setClientSecret(result.data.clientSecret));
  }, [singlepay?.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      setError("");
      console.log(paymentMethod);
    }
    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: singlepay?.displayName,
            email: singlepay?.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      console.log(paymentIntent);
      setProcessing(false);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };

      const url = `https://ancient-anchorage-18628.herokuapp.com/mybookings/${singlepay?._id}`;
      axios.put(url, payment).then((result) => console.log(result.data));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <Spinner animation="grow" variant="dark"></Spinner>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${singlepay?.price}
          </button>
        )}
      </form>
      {error && (
        <Alert variant="danger" className="my-4">
          {error}
        </Alert>
      )}
      {success && (
        <Alert variant="success" className="my-4">
          Your Payment process successFully
        </Alert>
      )}
    </div>
  );
};

export default CheckoutForm;
