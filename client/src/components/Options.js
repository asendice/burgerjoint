import React, { useState, useEffect } from "react";
import useDeliveryForm from "./useDeliveryForm";
import validate from "./validateDeliveryForm";
import OrderModal from "./OrderModal";

const Options = ({ setInfo, total, info, orders }) => {
  const [delivery, setDelivery] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const { handleChange, handleSubmit, values, errors } =
    useDeliveryForm(validate);

  useEffect(() => {
    setInfo(values);
  }, [values]);

  const overviewClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }

    // console.log(Object.entries(errors).length === 0, "true or false");
  };

  return (
    <div className="delivery">
      <div className="delivery-options">
        <button
          onClick={() => setDelivery(false)}
          className="delivery-btn pick-up"
          style={{
            backgroundColor: `${!delivery ? "#f58220" : ""}`,
          }}
        >
          Pick Up
        </button>
        <button
          onClick={() => setDelivery(true)}
          className="delivery-btn"
          style={{
            backgroundColor: `${delivery ? "#f58220" : ""}`,
          }}
        >
          Delivery
        </button>
      </div>
      <form
        className="delivery-form"
        onSubmit={handleSubmit}
        style={{ display: `${!delivery ? "none" : ""}` }}
      >
        <label>First Name</label>
        <input
          type="text"
          name="first"
          value={values.first}
          onChange={handleChange}
          placeholder="Rick"
        />
        {errors.first && <p className="form-err-msg">{errors.first}</p>}
        <label>Last Name</label>
        <input
          type="text"
          name="last"
          value={values.last}
          onChange={handleChange}
          placeholder="Grimes"
        />
        {errors.last && <p className="form-err-msg">{errors.last}</p>}
        <label>Phone Number</label>
        <input
          type="tel"
          name="ptn"
          value={values.ptn}
          onChange={handleChange}
          placeholder="5555550123"
        />
        {errors.ptn && <p className="form-err-msg">{errors.ptn}</p>}
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          placeholder="817 Cherokee Ave SE"
        />
        {errors.address && <p className="form-err-msg">{errors.address}</p>}
        <label>Apt / Suite #</label>
        <input
          type="text"
          name="apt"
          value={values.apt}
          onChange={handleChange}
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="Atlanta"
        />
        {errors.city && <p className="form-err-msg">{errors.city}</p>}
        <label>State</label>
        <input
          type="text"
          name="state"
          value={values.state}
          onChange={handleChange}
          placeholder="GA"
        />
        {errors.state && <p className="form-err-msg">{errors.state}</p>}
        <label>Postal Code</label>
        <input
          type="text"
          name="zip"
          value={values.zip}
          onChange={handleChange}
          placeholder="30315"
        />
        {errors.zip && <p className="form-err-msg">{errors.zip}</p>}

        <label>Delivery Instructions</label>
        <input
          type="text"
          name="instructions"
          value={values.instructions}
          onChange={handleChange}
          placeholder="Gate code is #1225"
        />

        <button
          type="submit"
          value="Submit"
          className="place-order"
          onClick={() => overviewClick()}
        >
          <div>Order Overview </div>
          <div style={{ display: `${total > 0 ? "" : "none"}` }}>
            {total > 0 ? `$${total}` : ""}
          </div>
        </button>
      </form>
      <button
        className="place-order"
        onClick={() => overviewClick()}
        style={{ display: `${delivery ? "none" : ""}` }}
      >
        <div>Order Overview </div>
        <div style={{ display: `${total > 0 ? "" : "none"}` }}>
          {total > 0 ? `$${total}` : ""}
        </div>
      </button>
      <OrderModal
        info={info}
        showModal={showModal}
        setShowModal={setShowModal}
        orders={orders}
        total={total}
        errors={errors}
        delivery={delivery}
      />
    </div>
  );
};

export default Options;
