import React, { useState } from "react";
import { roundTotal } from "../utils/Helper";
import { FaPlus, FaMinus } from "react-icons/fa";

const Payment = ({ total }) => {
  const [paymentShow, setPaymentShow] = useState(false);

  return (
    <div className="payment">
      <div
        onClick={() => setPaymentShow(!paymentShow)}
        className="payment-selector"
      >
        {!paymentShow ? <FaPlus /> : <FaMinus />}
        <h2>Payment Details</h2>
      </div>
      <form
        className="payment-form"
        style={{ display: `${!paymentShow ? "none" : ""}` }}
      >
        <label>Card number</label>
        <input type="credit" name="number" />
        <div className="payment-form-cvc">
          <div>
            <label>Exp Date</label>
            <input name="expDate" />
          </div>
          <div>
            <label>CVC/CVV</label>
            <input name="cvc" />
          </div>
        </div>
        <label>Cardholder's name</label>
        <input name="name" />
        <button className="payment-btn">
          Confirm Payment ${roundTotal(total)}
        </button>
      </form>
    </div>
  );
};

export default Payment;
