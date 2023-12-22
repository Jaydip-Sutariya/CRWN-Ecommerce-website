import React from "react";
import pic from "./logo.png.png";
import { NavLink } from "react-router-dom";

function NavBar() {
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

        <button>0</button>
      </div>

    </div>
  );
}

export default NavBar;
