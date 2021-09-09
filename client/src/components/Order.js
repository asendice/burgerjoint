import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import OrderItem from "./OrderItem";

const Order = ({ orders, updateOrderQty, removeOrder, total }) => {
  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState(true);

  const dismissModal = (e) => {
    if (e.target.id === "order-modal") {
      setShowModal(false);
    } else {
      return null;
    }
  };

  const renderOrderModal = () => {
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

  const renderOrders = () => {
    if (orders.length > 0) {
      return orders.map((order) => {
        return (
          <div key={order.name}>
            <OrderItem
              order={order}
              updateOrderQty={updateOrderQty}
              removeOrder={removeOrder}
            />
          </div>
        );
      });
    } else {
      return (
        <div className="no-order">
          {" "}
          You have 0 orders. Visit our <Link to="/menu">menu</Link> to add
          orders.
        </div>
      );
    }
  };

  const renderDelivery = () => {
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
        <form style={{ display: `${!delivery ? "none" : ""}` }}>
          <label>First Name</label>
          <input type="text" name="firstName" />
          <label>First Name</label>
          <input type="text" name="firstName" />
        </form>
      </div>
    );
  };

  return (
    <div className="order-page">
      <div className="menu-title">
        <div className="back-btn">
          <Link to="/menu">
            <FaArrowLeft className="back-arrow" />
            <span id="back-menu">Back to Menu</span>
          </Link>
        </div>

        <h1>Your Order</h1>
      </div>
      <div className="orders-container">{renderOrders()}</div>
      {renderDelivery()}

      <div className="place-order" onClick={() => setShowModal(!showModal)}>
        <div>Place Order </div>
        <div style={{ display: `${total > 0 ? "" : "none"}` }}>
          {total > 0 ? `$${total}` : ""}
        </div>
      </div>
      {renderOrderModal()}
    </div>
  );
};

export default Order;
