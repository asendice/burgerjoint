import React, { useState, useEffect } from "react";
import axios from "axios";
import brush from "../img/brush.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Menu = ({
  createOrder,
  orders,
  menu,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [showMobile, setShowMobile] = useState(false);

  const checkOrder = (order) => {
    console.log(order.name, "name");
    if (orders.includes(order)) {
      return null;
    } else {
      createOrder(order);
    }
  };

  const renderMenu = () => {
    if (menu.length > 0 && selectedCategory.name === "Menu") {
      let firstMenu = [menu[0], menu[19], menu[3]];
      return firstMenu.map((item) => {
        return (
          <div className="menu-card">
            <h2>{item.name.toUpperCase()}</h2>
            <p className="menu-card-descrip">{item.calories} calories</p>
            <p>{item.description}</p>
            <img alt={item.name} src={item.img} />

            <div onClick={() => checkOrder(item)} className="menu-card-add">
              Add to Order
            </div>
          </div>
        );
      });
    } else {
      const filteredMenu = menu.filter((item) => {
        if (
          item.category.toUpperCase() === selectedCategory.name.toUpperCase()
        ) {
          return item;
        }
      });
      return filteredMenu.map((item) => {
        return (
          <div className="menu-card">
            <h2>{item.name.toUpperCase()}</h2>
            <p className="menu-card-descrip">{item.calories} calories</p>
            <p>{item.description}</p>
            <img alt={item.name} src={item.img} />
            <div onClick={() => checkOrder(item)} className="menu-card-add">
              Add to Order
            </div>
          </div>
        );
      });
    }
  };

  const renderCategory = () => {
    return (
      <>
        <div className="menu-title">
          <h1>{selectedCategory.name}</h1>
          {selectedCategory.name === "Menu" ? <img src={brush} /> : null}
        </div>
        <div className="menu-description">{selectedCategory.description}</div>
      </>
    );
  };

  const onMobileMenuClick = () => {
    setShowMobile(!showMobile);
  };

  return (
    <div className="menu">
      <div className="category-menu">
        <div className="categories">
          {categories.map((cat) => {
            return (
              <div
                style={{ opacity: selectedCategory === cat ? "1" : "" }}
                onClick={() => setSelectedCategory(cat)}
                className="category-item"
              >
                <img src={cat.img} />
                <h4>{cat.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <div className="category-menu-mobile">
        <h5>
          {selectedCategory.name != "Menu"
            ? selectedCategory.name
            : "Categories"}
        </h5>
        <div
          onClick={() => onMobileMenuClick()}
          className="category-menu-mobile-icon"
        >
          {showMobile ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <div className="menu-mobile" id={showMobile ? "mobile-menu" : ""}>
          {categories.map((cat) => {
            return (
              <div
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowMobile(false);
                }}
              >
                <h5>{cat.name}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <div className="display-menu">
        <div className="menu-box">
          {renderCategory()}
          <div className="card-group">{renderMenu()}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
