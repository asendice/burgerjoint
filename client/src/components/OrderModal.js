import React, { useState, useEffect } from "react";
import Payment from "../components/Payment";
import Location from "./Location";
import { roundTotal } from "../utils/Helper";
import { FaWindowClose } from "react-icons/fa";

const OrderModal = ({
  showModal,
  setShowModal,
  delivery,
  orders,
  info,
  total,
  errors,
  cancel,
  setCancel,
}) => {
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setCancel(true);
    } else {
      setCancel(false);
    }
  }, [errors]);

  const dismissModal = (e) => {
    if (e.target.id === "order-modal") {
      setShowModal(false);
    } else {
      return null;
    }
  };

  if (showModal) {
    return (
      <div
        id="order-modal"
        className="order-modal"
        onClick={(e) => dismissModal(e)}
      >
        <div className="modal-content">
          <div className="modal-header">
            <FaWindowClose
              onClick={() => setShowModal(false)}
              className="close-modal"
            />
          </div>
          <div className="modal-title">
            <h2>Order Overview</h2>
          </div>
          <div className="modal-orders">
            {orders.map((order) => {
              return (
                <div className="modal-order">
                  <h5>{order.qty}</h5>
                  <h4>{order.name}</h4>
                  <p>${roundTotal(order.qty * order.price)}</p>
                </div>
              );
            })}
            <div className="modal-total"> Total: ${total}</div>
          </div>
          {delivery ? (
            <>
              <div className="modal-title">
                <h2>Delivery Address </h2>
              </div>
              {info && !cancel ? (
                <>
                  <div className="modal-text">
                    <h3>
                      {info.first} {info.last}
                    </h3>
                    <h4>{info.address} </h4>
                    <h4>{info.apt} </h4>
                    <h4>
                      {info.city}, {info.state} {info.zip}{" "}
                    </h4>
                    <h4>United States </h4>
                    <h4>{info.ptn} </h4>
                  </div>
                  <div className="modal-title">
                    <h2>Delivery Instructions</h2>
                  </div>
                  {info.instructions && info.instructions.length > 0 ? (
                    <h4 className="modal-instructions">{info.instructions}</h4>
                  ) : (
                    <h4 className="modal-instructions">
                      *No Special instructions
                    </h4>
                  )}
                </>
              ) : (
                <h3 className="address-err-msg ">*Invalid Address</h3>
              )}{" "}
            </>
          ) : (
            <>
              <div className="modal-title">
                <h2>Pick Up Location </h2>
              </div>
              <div className="modal-text">
                <h3>Burger Joint Tahoe</h3>
                <h4>493 Brassie Ave, Kings Beach Ca 96143</h4>
                <h4>(530) 546-7443 </h4>
                <h4>Sunday - Saturday</h4>
                <h4>(11:00am - 6:00pm)</h4>
              </div>
            </>
          )}
          <Payment total={total} cancel={cancel} setShowModal={setShowModal} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default OrderModal;
