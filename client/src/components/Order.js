import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const Order = ({ orders }) => {


  return (
    <div className="order-page">
      <div className="menu-title">
        <h1>Your Order</h1>
      </div>
      <div className="order-container">
        {orders.map((order) => {
          let quantity = order.qty;
          return (
            <div className="order-item">
              <div className="order-name">
                <img src={order.img} />
                <h2>{order.name}</h2>
              </div>
              <div className="order-qty">
                <FaMinusCircle onClick={() => quantity = quantity - 1} />
                <h1>{quantity}</h1>
                <FaPlusCircle onClick={() => quantity + 1}/>
              </div>
              <div className="order-total">
                <h2>12.99</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
