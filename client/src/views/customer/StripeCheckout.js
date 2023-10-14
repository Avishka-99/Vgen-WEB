import React, { useState } from "react";
import{CardElement,Elements,
    useStripe,
    useElements,} from "@stripe/react-stripe-js";

import Axios from 'axios'; // Import Axios instance configured for your API calls

const StripeCheckout = ({ amount, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment intent on your server
    try {
      const response = await Axios.post('http://localhost:5001/api/intents', {
        amount: amount * 100, // Convert amount to cents (Stripe expects amount in smallest currency unit)
      });

      const { client_secret } = response.data.paymentIntent;

      const { token, error } = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) {
        setError(error.message);
      } else {
        // Handle the payment success on the client side
        onPaymentSuccess(token);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to process payment. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <CardElement />
      </label>
      <div className="error" role="alert">
        {error}
      </div>
      <button type="submit" disabled={!stripe}>
        Pay ${amount}
      </button>
    </form>
  );
};

export default StripeCheckout;



