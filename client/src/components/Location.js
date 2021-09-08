import React from "react";
import { NavLink } from "react-router-dom";
import GoogleMapReact from "google-map-react";

const Location = () => {
  const defaultProps = {
    center: {
      lat: 39.24119,
      lng: -120.03275,
    },
    zoom: 14,
  };

  const Marker = (props) => {
    return <div className="marker"></div>;
  };

  return (
    <div className="landing-section">
      <h1 className="landing-section-title">Locations</h1>
      <div className="location-container">
        <div className="location-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDXhAPKlZAgvV88qB10EHW8Di3jRhUOCDg",
              v: "3.31",
              language: "en",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            resetBoundsOnResize={true}
          >
            <Marker
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
            />
          </GoogleMapReact>
        </div>
        <div className="location-card">
          <h1>Burger Joint Tahoe</h1>
          <p>493 Brassie Ave, Kings Beach Ca 96143</p>
          <p>(530) 546-7443 </p>
          <h4>Sunday - Saturday</h4>
          <p>(11:00am - 6:00pm)</p>
          <NavLink to="/menu">
            <button>Order Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Location;
