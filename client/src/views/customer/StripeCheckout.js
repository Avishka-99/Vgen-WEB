import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../../styles/Stripe.css";
import Axios from "../../api/Axios";


function StripeCheckout({ onSuccess, onCancel }) {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
     

      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      // Handle error (e.g., display error message to the user)
      console.error(error);
    } else {
      // Send the token to your server or handle the token as needed
      // For this example, let's assume you send the token to your server
      // Server-side logic will handle the payment using the token
      onSuccess(token);
    }
  };

  return (
    <div className="stripe_modal">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="stripe-card-element">
          <CardElement />
        </div>
        <button type="submit" disabled={!stripe}>
          Pay Now
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default StripeCheckout;




