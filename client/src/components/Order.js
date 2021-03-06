import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import OrderItem from "./OrderItem";
import Options from "./Options";

const Order = ({ orders, updateOrderQty, removeOrder, total }) => {
  const [info, setInfo] = useState({});

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
      <Options
        total={total}
        info={info}
        setInfo={setInfo}
        orders={orders}
      />
    </div>
  );
};

export default Order;
