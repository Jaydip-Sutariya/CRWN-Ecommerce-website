import React from "react";
import Collection from "./Collection";
import { useSelector } from "react-redux";

function Shopepage() {
  const data = useSelector((state) => {
    return state.datas;
  });
  console.log(Object.keys(data));
  return (
    <>
      <div className="shopepadding">
        {Object.keys(data)
          .reverse()
          .map((key) => {
            return <Collection title={key} />;
          })}
        {/* <Collection /> */}

        {/* <Collection />
      <Collection />
      <Collection /> */}
      </div>
    </>
  );
}

export default Shopepage;
