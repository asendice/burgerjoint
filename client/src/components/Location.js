import React from "react";
import GoogleMapReact from "google-map-react";

const Location = () => {
  const defaultProps = {
    center: {
      lng: -73.935242,
      lat: 40.73061,
    },
    zoom: 5,
  };

  return (
    <div className="landing-section">
      <h1 className="landing-section-title">Locations</h1>
      <div className="location-container">
        <div className="location-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDXhAPKlZAgvV88qB10EHW8Di3jRhUOCDg",
              language: "en",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          ></GoogleMapReact>
        </div>
        <div className="location-card">
          <h1>Burger Joint Tahoe</h1>
          <p>493 Brassie Ave, Kings Beach Ca 96143</p>
          <p>(530) 546-7443 </p>
          <h4>Sunday - Saturday</h4>
          <p>(11:00am - 6:00pm)</p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Location;
