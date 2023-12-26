import React from "react";
import { NavLink } from "react-router-dom";


function BoxItem({ Imgurl, title, key }) {
  
  return (
    <div className="container" key={key}>
      <div className="box">
        <img src="	https://crwn-shop.netlify.app/images/hats.png" alt="" />
      </div>
    <NavLink to="/shop/men" className="nlink">
        <h2>Hats</h2>
        <p>SHOP NOW</p>
    </NavLink>
    </div>
  );
}

export default BoxItem;
