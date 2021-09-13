import React, { useState } from "react";

const Options = () => {
  const [delivery, setDelivery] = useState(true);
  const [info, setInfo] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    obj.first = e.target.first.value;
    obj.last = e.target.last.value;
    obj.address = e.target.address.value;
    obj.apt = e.target.apt.value;
    obj.city = e.target.city.value;
    obj.zip = e.target.zip.value;
    obj.instructions = e.target.instructions.value;
    setInfo(obj);
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
        <input type="text" name="first" />
        <label>Last Name</label>
        <input type="text" name="last" />
        <label>Address</label>
        <input type="text" name="address" />
        <label>Apt / Suite #</label>
        <input type="text" name="apt" />
        <label>City</label>
        <input type="text" name="city" />
        <label>State</label>
        <input type="text" name="state" />
        <label>Postal Code</label>
        <input type="text" name="zip" />
        <label>Delivery Instructions</label>
        <input type="text" name="instructions" />
        <input type="submit" value="Submit" />
        {/* <div
          type="submit"
          className="place-order"
          onClick={() => setShowModal(!showModal)}
        >
          <div>Place Order </div>
          <div style={{ display: `${total > 0 ? "" : "none"}` }}>
            {total > 0 ? `$${total}` : ""}
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Options;
