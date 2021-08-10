import React from "react";
import landing from "../img/landscape.jpeg";

const Landing = () => {
  return (
    <div className="landing">
      <img src={landing} />
      <div className="title">
        <h1>MOUTH WATERING TASTE</h1>
        <div></div>
        <div className="locations-btn">
          <p>Locations</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
