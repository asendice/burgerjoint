import React from "react";
import OrderItem from "./OrderItem";

const Order = ({ orders, updateOrderQty, removeOrder }) => {
  const renderEntres = () => {
    let arrOfEntres = [
      "Signature Burgers",
      "Crispy Chicken Sandwiches",
      "Grilled Chicken Sandwiches",
      "Turkey Burgers",
      "Kids Meals",
    ];
    const entres = orders.filter((order) =>
      arrOfEntres.includes(order.category)
    );
    if (entres.length > 0) {
      return (
        <div className="order-section">
          <h1 className="order-title">Entres</h1>
          {entres.map((item) => {
            return (
              <div key={item.name}>
                <OrderItem
                  order={item}
                  orders={orders}
                  updateOrderQty={updateOrderQty}
                  removeOrder={removeOrder}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  const renderSides = () => {
    let arrOfSides = ["FRIES & SIDES", "FRESH SALADS"];
    const sides = orders.filter((order) => arrOfSides.includes(order.category));
    if (sides.length > 0) {
      return (
        <div className="order-section">
          <h1 className="order-title">Sides and Salads</h1>
          {sides.map((item) => {
            return (
              <div key={item.name}>
                <OrderItem
                  order={item}
                  orders={orders}
                  updateOrderQty={updateOrderQty}
                  removeOrder={removeOrder}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };
  const renderBeverages = () => {
    let arrOfBeverages = ["BEVERAGES", "SHAKES"];
    const beverages = orders.filter((order) =>
      arrOfBeverages.includes(order.category)
    );
    if (beverages.length > 0) {
      return (
        <div className="order-section">
          <h1 className="order-title">Beverages and Desserts</h1>
          
          {beverages.map((item) => {
            return (
              <div key={item.name}>
                <OrderItem
                  order={item}
                  orders={orders}
                  updateOrderQty={updateOrderQty}
                  removeOrder={removeOrder}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="order-page">
      <div className="menu-title">
        <h1>Your Order</h1>
      </div>
      <div className="orders-container">
        {renderEntres()}
        {renderSides()}
        {renderBeverages()}
      </div>
      <div className="total">
        <h1>Total</h1>
      </div>
    </div>
  );
};

export default Order;
