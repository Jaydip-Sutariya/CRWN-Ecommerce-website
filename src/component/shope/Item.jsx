import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slice/Counterslice"; 

function Item({ key2 }) {
  // console.log(key2);
   
  const dispatch =useDispatch()

  // console.log(counter);
  return (
    <>
      <div className="menBox">
        <div className="imgBox" style={{backgroundImage:`url(${key2.imageUrl})`}}>
         
          <button className="cartbtn" onClick={() => dispatch(increment())} >Add To Cart</button>
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
