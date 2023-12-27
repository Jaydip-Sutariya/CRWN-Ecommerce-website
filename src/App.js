import React from "react";
import "./App.css";
import Homepage from "./component/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopepage from "./component/shope/Shopepage";
import { useSelector } from "react-redux";
import Navebarpage from "./component/navbar/Navebarpage";
import Contect from "./component/contact/Contect";
import Signinpage from "./component/singin/Signinpage";
// import BoxItem from "./component/home/BoxItem";
import Mens from "./component/shope/pages/Mens";
import Womens from "./component/shope/pages/Womens";
import Jackets from "./component/shope/pages/Jackets";
import Sneakers from "./component/shope/pages/Sneakers";
import Hats from "./component/shope/pages/Hats";



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
            path="/shop/mens"
            element={
              <>
              <Navebarpage />
              <Mens/>
              </>
            }
          />  
           <Route
            path="/shop/womens"
            element={
              <>
              <Navebarpage />
              <Womens/>
              </>
            }
          />  <Route
          path="/shop/jackets"
          element={
            <>
            <Navebarpage />
            <Jackets/>
            </>
          }
        />  <Route
        path="/shop/sneakers"
        element={
          <>
          <Navebarpage />
          <Sneakers/>
          </>
        }
      />  <Route
      path="/shop/hats"
      element={
        <>
        <Navebarpage />
        <Hats/>
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
