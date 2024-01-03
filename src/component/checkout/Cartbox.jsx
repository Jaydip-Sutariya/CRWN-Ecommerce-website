import React from "react";
import { NavLink } from "react-router-dom";
import Btnsignin from "../singin/Btnsignin";
import { useSelector } from "react-redux";


function Cartbox() {
  const cartitemdata = useSelector((state) => state.cartitem.cartitemdata);
//  console.log(cartitemdata.imageUrl);
// console.log(sameitemcount);
  return (
    <>
     <div className="cartbox">
        <div className="all_small_item">
          {cartitemdata.map((item)=>{
            return(
            <div className="small_item">
            <div className="samll_imgbox">
              <img
                src={item.imageUrl}
                alt="loading"
              />
            </div>
            <div className="item_info_redux">
              <span>{item.name}</span>
                <h5>{`${item.cartQuantity} x $ ${item.price} `}</h5>
                
            </div>
          </div>)
          })}
          
          
        </div>
        <NavLink to="/checkout" className="side">
          <Btnsignin btnName="go to checkout" className="checkout_btn" />
        </NavLink>
      </div>

      {/* <div className="cartbox">
        <div className="all_small_item">
          <div className="small_item">
            <div className="samll_imgbox">
              <img
                src={cartitemdata.imageUrl}
                alt="loading"
              />
            </div>
            <div className="item_info_redux">
              <span>{cartitemdata.name}</span>
                <h5>{`${sameitemcount} x $ ${cartitemdata.price} `}</h5>
                
            </div>
          </div>
        </div>
        <NavLink to="/checkout" className="side">
          <Btnsignin btnName="go to checkout" className="checkout_btn" />
        </NavLink>
      </div> */}
    </>
  );
}

export default Cartbox;
