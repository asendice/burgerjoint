import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Order from "../components/Order";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  const getMenu = async () => {
    await axios
      .get("http://localhost:8000/api/menu")
      .then((response) => {
        if (response) {
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

  const createOrder = (order) => {
    let arrOrders = orders;
    arrOrders.push(order);
    setOrders(arrOrders);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/menu"
          render={() => (
            <Menu
              menu={menu}
              createOrder={createOrder}
              orders={orders}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        />
        <Route exact path="/order" render={() => <Order orders={orders} />} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
