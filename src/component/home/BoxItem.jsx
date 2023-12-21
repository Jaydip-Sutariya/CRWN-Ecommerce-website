import React from "react";

function BoxItem({ Imgurl, title, key }) {
  return (
    <div className="container" key={key}>
      <div className="box">
        <img src={Imgurl} alt="" />
      </div>
      <div className="childbox">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
}

export default BoxItem;
