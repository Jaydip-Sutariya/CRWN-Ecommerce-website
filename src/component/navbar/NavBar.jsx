import React, { useState } from "react";
import pic from "./logo.png.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Cartbox from "../checkout/Cartbox";

function NavBar() {
  const counter = useSelector((state) => state.counter.count);

  // console.log(cartitemdata.map((item)=>item));

  const [showCart, setShowCart] = useState(false);

  // console.log(counter);
  function cartbox() {
    setShowCart(!showCart);
  }
  return (
    <div className="MainNav">
      <div className="simbol">
        <NavLink to="/">
          {" "}
          <img src={pic} alt="" />
        </NavLink>
        {/* <img src={pic} alt="" /> */}
      </div>
      <div className="pageTag">
        <span>
          <NavLink to="/shop">SHOP</NavLink>
        </span>
        <span>
          <NavLink to="/contact">CONTACT</NavLink>
        </span>

        <span>
          <NavLink to="/signin">SIGN IN</NavLink>
        </span>

        <button onClick={cartbox}>{counter}</button>
      </div>
      <Cartbox/>

     
      {/* {showCart ? 
       <Cartbox/>
       : null} */}
    </div>
  );
}

export default NavBar;
{
  /* <img src="https://crwn-shop.netlify.app/images/hats.png" alt="" /> */
}
