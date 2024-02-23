import React from "react";

//importaciones propias
import backgroundImage from "../../../assets/images/banner.jpg"; 
import "../../../styles/background.css"

const Background = () => {
  return (
    <div className="background-container">
      <div className="background">
        <img
          className="background-img"
          src={backgroundImage}
          alt="banner img"
        />
      </div>
    </div>
  );
};

export default Background;
