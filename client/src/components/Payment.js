import React, { useState } from "react";
import { roundTotal } from "../utils/Helper";
import { FaPlus, FaMinus } from "react-icons/fa";
import useForm from "./useForm";
import validateForm from "./validateForm";

const Payment = ({ total }) => {
  const [paymentShow, setPaymentShow] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useForm(validateForm);

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
        onSubmit={handleSubmit}
      >
        <label>Card number</label>
        <input
          type="tel"
          name="number"
          placeholder="0000000000000000"
          onChange={handleChange}
          value={values.number}
        />
        {errors.number && <p className="form-err-msg">{errors.number}</p>}
        <div className="payment-form-cvc">
          <div>
            <label>Exp Date</label>
            <input
              type="date"
              name="exp"
              onChange={handleChange}
              value={values.exp}
            />
            {errors.exp && <p className="form-err-msg">{errors.exp}</p>}
          </div>
          <div>
            <label>CVC/CVV</label>
            <input
              name="cvc"
              type="text"
              onChange={handleChange}
              value={values.cvc}
            />
            {errors.cvc && <p className="form-err-msg">{errors.cvc}</p>}
          </div>
        </div>
        <label>Cardholder's name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && <p className="form-err-msg">{errors.name}</p>}
        <button className="payment-btn">
          Confirm Order ${roundTotal(total)}
        </button>
      </form>
    </div>
  );
};

export default Payment;
