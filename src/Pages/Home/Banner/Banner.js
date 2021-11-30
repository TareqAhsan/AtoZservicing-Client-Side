import React from "react";
import banner from "../../../images/banner1.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="head">
      <div className="centered">
        <h1 className="display-1">Your Personal Assistant</h1>
        <h5 className="display-6">
          One-stop solution for your services. Order any service, anytime.
        </h5>
      </div>
      <img src={banner} style={{ height:"100vh", width: "100%" }} alt="" />
    </div>
  );
};

export default Banner;
