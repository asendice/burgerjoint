import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Featured from "./Featured";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <Featured />
    </div>
  );
};

export default App;
