import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import OrderItem from "./OrderItem";

const Order = ({ orders, updateOrderQty, removeOrder }) => {
  const [total, setTotal] = useState(0);

  const renderOrders = () => {
    if (orders.length > 0) {
      return orders.map((order) => {
        return (
          <OrderItem
            order={order}
            updateOrderQty={updateOrderQty}
            removeOrder={removeOrder}
          />
        );
      });
    } else {
      return (
        <div className="no-order">
          {" "}
          You have 0 orders. Visit our <NavLink to="/menu">menu</NavLink> to add
          orders.
        </div>
      );
    }
  };
  return (
    <div className="order-page">
      <div className="menu-title">
        <div >
          <NavLink to="/menu">
            <FaArrowLeft />
          </NavLink>
        </div>
        <h1>Your Order</h1>
      </div>
      <div className="orders-container">{renderOrders()}</div>
      <div className="place-order">Place Order</div>
    </div>
  );
};

export default Order;
