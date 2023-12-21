import React from "react";
import BoxItem from "./BoxItem";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Homepage() {
  const data = useSelector((state) => {
    return state.datas;
  });
  return (
    <div className="ImgBox">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element= {<BoxItem />} />
      </Routes>
      
      </BrowserRouter> */}



      
      <BoxItem />
      <BoxItem />
      {/* {Object.keys(data).map((key) => {
        console.log(data);
      return (
        <BoxItem
          Imgurl={data[key].url}
          title={data[key].title}
          key={data[key].id}
          
        />
      );
    })} */}
    </div>
  );
}
