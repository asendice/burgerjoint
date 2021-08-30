import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const OrderItem = ({ order, orders, updateOrderQty }) => {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity, "quantity");

  useEffect(() => {
    updateOrderQty(quantity, order.name);
  }, [quantity]);

  return (
    <div key={order._id} className="order-item">
      <div className="order-name">
        <img alt={order.name} src={order.img} />
        <h2>{order.name.toUpperCase()}</h2>
      </div>
      <div className="order-qty">
        <FaMinusCircle
          onClick={() => {
            let qty = quantity - 1;
            setQuantity(qty);
          }}
        />
        <h1>{quantity}</h1>
        <FaPlusCircle
          onClick={() => {
            let qty = quantity + 1;
            setQuantity(qty);
          }}
        />
      </div>
      <div className="order-total">
        <h2>{12.99 * quantity}</h2>
      </div>
    </div>
  );
};

export default OrderItem;
