import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Featured from "./Featured";
import Gram from "./Gram";
import Location from "./Location";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Landing />
      <Featured />
      <Gram />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
