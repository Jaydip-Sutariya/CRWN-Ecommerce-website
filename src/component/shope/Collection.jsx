import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Collection({ title, isForList = false }) {
  // console.log(title);
  const data = useSelector((state) => {
    return state.datas;
  });

  // console.log(title);
  return (
    <>
      <div className="main">
        <NavLink to={`/shop/${title}`}>
          <button className="title">{title}</button>
        </NavLink>

        <div className="fourPis">
          {(isForList ? data[title].items : data[title].items.slice(0, 4)).map(
            (key2) => {
              return <Item key2={key2} />;
            }
          )}
        </div>
      </div>
    </>
  );

 
}

export default Collection;
