import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Featured from "./Featured";
import Gram from "./Gram";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <Featured />
      <Gram />
    </div>
  );
};

export default App;
