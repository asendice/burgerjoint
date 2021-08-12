import React from "react";
import burger from "../img/classicjointburger.png";
import salad from "../img/mostamazingcobbsalad.png";
import fries from "../img/spfries.png";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="landing-section-title">Burger Joint's Features </h1>
      <div className="card-container">
        <div className="card" style={{ backgroundColor: "#F8AC6A" }}>
          <h2>Classic Joint Burger</h2>
          <img src={burger} />
        </div>
        <div className="card" style={{ backgroundColor: "#F58220" }}>
          <h2>Most Amazing Cobb Salad</h2>
          <img src={salad} />
        </div>
        <div className="card" style={{ backgroundColor: "#2092F5" }}>
          <h2>Sweet Potatoe Fries</h2>
          <img src={fries} />
        </div>
      </div>
      <button>See Full Menu</button>
    </div>
  );
};

export default Featured;
