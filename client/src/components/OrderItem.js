import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

const OrderItem = ({ order, removeOrder, updateOrderQty }) => {
  const [quantity, setQuantity] = useState(order.qty > 1 ? order.qty : 1);

  useEffect(() => {
    updateOrderQty(quantity, order.name);
  }, [quantity]);

  const onRemoveItemClick = () => {
    console.log(order, "order");
    removeOrder(order._id, order.name);
  };

  return (
    <div key={order._id} className="order-item">
      <div className="remove-order" >
        <FaWindowClose onClick={() => onRemoveItemClick()} />
      </div>
      <div className="order-content">
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
          <h2>{quantity}</h2>
          <FaPlusCircle
            onClick={() => {
              let qty = quantity + 1;
              setQuantity(qty);
            }}
          />
        </div>
        <div className="order-total">
          <h3>${12.99 * quantity}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
