import React from "react";
import OrderItem from "./OrderItem";

const Order = ({ orders, updateOrderQty }) => {
  return (
    <div className="order-page">
      <div className="menu-title">
        <h1>Your Order</h1>
      </div>
      <div className="order-container">
        {orders.map((order) => {
          return (
            <div key={order.name}>
              <OrderItem order={order} orders={orders} updateOrderQty={updateOrderQty} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
