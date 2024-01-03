// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../store/slice/Counterslice"; 
import { additemtocart } from "../../store/slice/Cartitemslice"; 


function Item({ key2 }) {
  // console.log(key2);
   
  const dispatch =useDispatch()

  // console.log(counter);
  return (
    <>
      <div className="menBox" key={key2.id}>
        <div className="imgBox" style={{backgroundImage:`url(${key2.imageUrl})`}}>
         
          <button className="cartbtn" onClick={() => {dispatch(increment(1));dispatch(additemtocart(key2)) }}  >Add To Cart</button>
        </div>
        <div className="itenName">
          <span className="name">{key2.name} </span>
          <span>{key2.price}</span>
        </div> 
       
      </div>
    </>
  );
}

export default Item;
