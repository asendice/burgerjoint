import React from "react";
import Landing from "./Landing";
import Featured from "./Featured";
import Gram from "./Gram";
import Location from "./Location";

const Home = ({ setSelectedCategory, categories }) => {
  return (
    <div className="app">
      <Landing />
      <Featured setSelectedCategory={setSelectedCategory} categories={categories} />
      <Gram />
      <Location />
    </div>
  );
};

export default Home;
