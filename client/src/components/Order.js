import React from "react";
import { NavLink } from "react-router-dom";
import OrderItem from "./OrderItem";

const Order = ({ orders, updateOrderQty, removeOrder }) => {
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
      return <div> You have 0 orders. Visit our <NavLink to="/menu">menu</NavLink> to add orders.</div>;
    }
  };
  return (
    <div className="order-page">
      <div className="menu-title">
        <h1>Your Order</h1>
      </div>
      <div className="orders-container">{renderOrders()}</div>
      <div className="total">
        <h1>Total</h1>
      </div>
    </div>
  );
};

export default Order;
