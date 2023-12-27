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
          {console.log("=======", data, title)}
          {(isForList ? data[title].items : data[title].items.slice(0, 4)).map(
            (key2) => {
              return <Item key2={key2} />;
            }
          )}
        </div>
      </div>
    </>
  );

  {
    /* {Object.keys(data).map((key) => {
            // console.log(data[key].items.map((key)=>ke ))
            return (
              <div className="main">
                <div className="menSection">
                  <div className="fourPis">
                    {data[key].items.slice(0,1).map((val)=>{
                      console.log(val)
                      return(
                  <Item key2={key} /> 


                      )
                    })}
                  </div>
                </div>
              </div>
            );
          })} */
  }

  {
    /* <div className="main">
        <div className="menSection">
          <h2>{title}</h2>
          <div className="fourPis">
            <Item />
           
          </div>
        </div>
      </div> */
  }
}

export default Collection;
