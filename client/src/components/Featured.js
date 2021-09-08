import React from "react";
import { NavLink, Link } from "react-router-dom";

const Featured = ({ setSelectedCategory, categories }) => {
  const onFeatureCardClick = (name) => {
    const filteredCategory = categories.filter(
      (e) => name.toUpperCase() === e.name
    );
    setSelectedCategory(filteredCategory[0]);
  };

  return (
    <div className="landing-section">
      <h1 className="landing-section-title">Burger Joint's Features </h1>
      <div className="card-container">
        <Link to="/menu">
          <div
            key="burger"
            className="card"
            onClick={() => onFeatureCardClick("signature burgers")}
            style={{ backgroundColor: "#F8AC6A" }}
          >
            <h2>Classic Joint Burger</h2>
            <img
              alt="classic joint buger"
              src="https://burgerjoint.s3.us-west-1.amazonaws.com/classic-joint-burger.png"
            />
          </div>
        </Link>
        <Link to="/menu">
          <div
            key="salad"
            className="card"
            onClick={() => onFeatureCardClick("fresh salads")}
            style={{ backgroundColor: "#F58220" }}
          >
            <h2>Cobb Salad</h2>
            <img
              alt="cobb salad"
              src="https://burgerjoint.s3.us-west-1.amazonaws.com/Grilled-Chicken_Cobb-Salad_Web.png"
            />
          </div>
        </Link>
        <Link to="/menu">
          <div
            key="fries"
            className="card"
            onClick={() => onFeatureCardClick("fries & sides")}
            style={{ backgroundColor: "#2092F5" }}
          >
            <h2>Sweet Potatoe Fries</h2>
            <img
              alt="fries"
              src="https://burgerjoint.s3.us-west-1.amazonaws.com/Sweet-Potato-Fries_web.png"
            />
          </div>
        </Link>
      </div>

      <NavLink to="/menu">
        <button>See Full Menu</button>
      </NavLink>
    </div>
  );
};

export default Featured;
