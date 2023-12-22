import React from "react";
import "./App.css";
import Homepage from "./component/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopepage from "./component/shope/Shopepage";
import { useSelector } from "react-redux";
import Navebarpage from "./component/navbar/Navebarpage";
import Contect from "./component/contact/Contect";
import Signinpage from "./component/singin/Signinpage";
import BoxItem from "./component/home/BoxItem";
import Mens from "./component/shope/pages/Mens";



export default function App() {
  const data = useSelector((state) => {
    return state.datas;
  });
  // console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navebarpage />
                <Homepage />
              </>
            }
          />8154991316
          
          <Route
            path="/shop"belement={
            <>
             <Navebarpage />
             <Shopepage />
            </>}>
           <Route
            path="/shop"
            element={
              <>
              <Navebarpage />
              <Shopepage />
              </>
            }
          />  
           <Route
            path="/shop/men"
            element={
              <>
              <Navebarpage />
              <Mens/>
              </>
            }
          />  
          </Route>
          <Route
            path="/contact"
            element={
              <>
                <Navebarpage />
                <Contect/>
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Navebarpage />
                <Signinpage/>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
  

    </>
  );
}
