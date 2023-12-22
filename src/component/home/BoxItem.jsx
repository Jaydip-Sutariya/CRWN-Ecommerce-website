import React from "react";
import { NavLink } from "react-router-dom";


function BoxItem({ Imgurl, title, key }) {
  
  return (
    <NavLink to="/shop/men">
    <div className="container" key={key}>
      <div className="box">
        <img src="https://crwn-shop.netlify.app/images/hats.png" alt="" />
      </div>
      <div className="childbox">
        <h2>Hats</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
    </NavLink>
  );
}

export default BoxItem;
