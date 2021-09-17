import React, { useState } from "react";
import { roundTotal } from "../utils/Helper";
import { FaPlus, FaMinus } from "react-icons/fa";
import useForm from "./useForm";
import validateForm from "./validateForm";

const Payment = ({ total, cancel, setShowModal }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(validateForm);
  console.log("errors from payment", errors);
  console.log("Cancel", cancel);

  return (
    <div className="payment">
      <div className="payment-selector">
        <div className="modal-title">
          <h2>Payment Details</h2>
        </div>
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
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
              placeholder="000"
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
          placeholder="Jim Smith"
          onChange={handleChange}
          value={values.name}
        />
        {errors.name && <p className="form-err-msg">{errors.name}</p>}
        {!cancel ? (
          <button className="payment-btn">
            Confirm Order ${roundTotal(total)}
          </button>
        ) : (
          <div onClick={() => setShowModal(false)} className="cancel-payment">
            Address Information Required
          </div>
        )}
      </form>
    </div>
  );
};

export default Payment;
