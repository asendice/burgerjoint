import React, { useState, useEffect } from "react";
import axios from "axios";
import brush from "../img/brush.png";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  console.log(selectedCategory, "selectedCategory ");

  const getMenu = async () => {
    await axios
      .get("http://localhost:8000/api/menu")
      .then((response) => {
        if (response) {
          console.log(response);
          return response;
        } else {
          const error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => setMenu(response.data.result));
  };

  const getCategories = async () => {
    await axios
      .get("http://localhost:8000/api/category")
      .then((response) => {
        if (response) {
          console.log(response);
          return response;
        } else {
          const error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      })
      .then((response) => setCategories(response.data.result));
  };

  useEffect(() => {
    getMenu();
    getCategories();
    const menu = {
      name: "Menu",
      description: `"Every bite a better burger” is more than our motto here at
      BurgerJoint – it’s our lifestyle. Top-quality ingredients are used
      in all of our BurgerJoint creations, from 100% Certified Angus Beef®
      burgers and crispy chicken sandwiches, to unique salad blends and
      creative sides. Discover every mouthwatering option we have to offer
      below. Already know what burger you’re craving? Skip the small talk
      and order online.`,
    };
    setSelectedCategory(menu);
  }, []);

  const renderMenu = () => {
    if (menu.length > 0 && selectedCategory.name === "Menu") {
      let firstMenu = [menu[0], menu[19], menu[22]];
      return firstMenu.map((item) => {
        return (
          <div className="menu-card">
            <h2>{item.name.toUpperCase()}</h2>
            <p>{item.calories} calories</p>
            <p>{item.description}</p>
            <img src={item.img} />
          </div>
        );
      });
    } else {
      let filteredMenu = menu.filter((item) => {
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
            <p>{item.calories} calories</p>
            <p>{item.description}</p>
            <img src={item.img} />
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

  return (
    <div className="menu">
      <div className="category-menu">
        <div className="categories">
          {categories.map((cat) => {
            return (
              <div
                style={{ opacity: selectedCategory === cat ? "1" : ".7" }}
                onClick={() => setSelectedCategory(cat)}
                className="category-item"
              >
                <img src={cat.img} />
                {cat.name}
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
