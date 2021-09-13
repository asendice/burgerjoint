import React from "react";
import { FaWindowClose } from "react-icons/fa";

const OrderModal = ({ showModal, setShowModal, orders }) => {
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
            <h3>Your Order</h3>
            <h3>{orders.length} items</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default OrderModal;
