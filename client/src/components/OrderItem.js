import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import  {roundTotal}  from "../utils/Helper";

const OrderItem = ({ order, removeOrder, updateOrderQty }) => {
  const [quantity, setQuantity] = useState(order.qty > 1 ? order.qty : 1);

 
  const onRemoveItemClick = () => {
    removeOrder(order._id, order.name);
  };

  let total = roundTotal(order.price * quantity);

  useEffect(() => {
    updateOrderQty(quantity, order.name);
  }, [quantity, order.name]);

  return (
    <div key={order._id} className="order-item">
      <FaWindowClose
        className="remove-order"
        onClick={() => onRemoveItemClick()}
      />
      <div className="order-content">
        <div className="order-name">
          <img alt={order.name} src={order.img} />
          <h2>{order.name.toUpperCase()}</h2>
        </div>
        <div className="order-qty">
          <FaMinus
            className="qty-container"
            onClick={() => {
              let qty = quantity - 1;
              setQuantity(qty);
            }}
          />

          <h2>{quantity}</h2>

          <FaPlus
            className="qty-container"
            onClick={() => {
              let qty = quantity + 1;
              setQuantity(qty);
            }}
          />
        </div>
        <div className="order-total">
          <h3>${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
