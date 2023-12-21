import React from "react";
import { useSelector } from "react-redux";

function Item({ key2 }) {
  console.log(key2);
  const data = useSelector((state) => {
    return state.datas;
  });
  // console.log(data.hats.items[0]);
  return (
    <>
      <div className="menBox">
        <div className="imgBox">
          <img src={key2.imageUrl} alt="tt" />
        </div>
        <div className="itenName">
          <span className="name">{key2.name}</span>
          <span>{key2.price}</span>
        </div>
        <button>Add To Cart</button>
      </div>
    </>
  );
}

export default Item;
