import React, { useState, useEffect } from "react";
import baseURL from "../apis/backendApi";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Order from "../components/Order";
import Membership from "../components/Membership";
import { roundTotal } from "../utils/Helper";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  }, [orders]);

  const updateTotal = () => {
    let num = 0;
    for (let i = 0; i < orders.length; i++) {
      num = num + Number(orders[i].price) * orders[i].qty;
    }
    setTotal(roundTotal(num));
  };

  const checkOrder = (order) => {
    setOrders([...orders, order]);
  };

  useEffect(() => {
    console.log(selectedCategory, "selectedCategory");
  }, [selectedCategory]);

  const updateOrderQty = (qty, name) => {
    const updateOrders = [...orders];
    const index = orders.findIndex((order) => order.name === name);
    updateOrders[index].qty = qty;
    setOrders(updateOrders);
  };

  const removeOrder = (id, name) => {
    console.log(name, "name");
    setOrders(
      orders.filter((order) => {
        return order.name !== name;
      })
    );
  };

  const getMenu = async () => {
    await backendApi
      .get("/menu")
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
    await backendApi
      .get("/category")
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

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar num={orders.length} />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />
          )}
        />
        <Route
          exact
          path="/menu"
          render={() => (
            <Menu
              menu={menu}
              setOrders={setOrders}
              checkOrder={checkOrder}
              orders={orders}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        />
        <Route
          exact
          path="/order"
          render={() => (
            <Order
              orders={orders}
              updateOrderQty={updateOrderQty}
              removeOrder={removeOrder}
              total={total}
            />
          )}
        />
        <Route exact path="/membership" component={Membership} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
