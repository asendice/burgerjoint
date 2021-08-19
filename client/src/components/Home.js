import React from "react";
import Landing from "./Landing";
import Featured from "./Featured";
import Gram from "./Gram";
import Location from "./Location";

const Home = () => {
  return (
    <div className="app">
      <Landing />
      <Featured />
      <Gram />
      <Location />
    </div>
  );
};

export default Home;
