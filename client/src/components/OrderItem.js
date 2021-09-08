import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { roundTotal } from "../utils/Helper";

const OrderItem = ({ order, removeOrder, updateOrderQty }) => {
  const [quantity, setQuantity] = useState(order.qty > 1 ? order.qty : 1);

  const onRemoveItemClick = () => {
    removeOrder(order._id, order.name);
  };

  let total = roundTotal(order.price * quantity);

  useEffect(() => {
    updateOrderQty(quantity, order.name);
  }, [quantity, order.name]);

  const adjustQuantityUp = () => {
    let qty = quantity + 1;
    if (qty >= 1) {
      setQuantity(qty);
    }
  };
  const adjustQuantityDown = () => {
    let qty = quantity - 1;
    if (qty >= 1) {
      setQuantity(qty);
    }
  };

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
          <button
            onClick={() => {
              adjustQuantityDown();
            }}
          >
            <FaMinus className="qty-container" />
          </button>
          <h2>{quantity}</h2>
          <button
            onClick={() => {
              adjustQuantityUp();
            }}
          >
            <FaPlus className="qty-container" />
          </button>
        </div>
        <div className="order-total">
          <h3>${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
