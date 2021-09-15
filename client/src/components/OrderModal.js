import React, { useState } from "react";
import { roundTotal } from "../utils/Helper";
import { FaWindowClose } from "react-icons/fa";

const OrderModal = ({ showModal, setShowModal, orders, info, total }) => {
  const [paymentToggle, setPaymentToggle] = useState(false);

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
            <h3>Order Overview</h3>
            <h3>{orders.length} items</h3>
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
          <div className="modal-title">
            <h3>Address Overview</h3>
          </div>
          {info ? (
            <>
              <div className="modal-address">
                <h4>
                  {info.first} {info.last}
                </h4>
                <h4>{info.address} </h4>
                <h4>{info.apt} </h4>
                <h4>
                  {info.city}, {info.state} {info.zip}{" "}
                </h4>
                <h4>United States </h4>
                <h4>{info.ptn} </h4>
              </div>
              <div className="modal-title">
                <h3>Delivery Instructions</h3>
              </div>
              {info.instructions && info.instructions.length > 0 ? (
                <div className="modal-instructions">{info.instructions}</div>
              ) : (
                "*No Special instructions"
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default OrderModal;
