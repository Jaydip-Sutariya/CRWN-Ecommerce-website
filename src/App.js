import React from "react";
import "./App.css";
import Homepage from "./component/home/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopepage from "./component/shope/Shopepage";
import { useSelector } from "react-redux";
import Navebarpage from "./component/navbar/Navebarpage";
import Contect from "./component/contact/Contect";
import Signinpage from "./component/singin/Signinpage";
import Mens from "./component/shope/pages/Mens";
import Womens from "./component/shope/pages/Womens";
import Jackets from "./component/shope/pages/Jackets";
import Sneakers from "./component/shope/pages/Sneakers";
import Hats from "./component/shope/pages/Hats";
import Checkout from "./component/checkout/Checkout";

export default function App() {
  const data = useSelector((state) => {
    return state.datas;
  });
  // console.log(data);
  return (
    <>
      <BrowserRouter>
        <Navebarpage />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage />
              </>
            }
          />
          8154991316
          <Route
            path="/shop"
            belement={
              <>
                <Shopepage />
              </>
            }
          >
            <Route
              path="/shop"
              element={
                <>
                  <Shopepage />
                </>
              }
            />
            <Route
              path="/shop/mens"
              element={
                <>
                  <Mens />
                </>
              }
            />
            <Route
              path="/shop/womens"
              element={
                <>
                  <Womens />
                </>
              }
            />{" "}
            <Route
              path="/shop/jackets"
              element={
                <>
                  <Jackets />
                </>
              }
            />{" "}
            <Route
              path="/shop/sneakers"
              element={
                <>
                  <Sneakers />
                </>
              }
            />{" "}
            <Route
              path="/shop/hats"
              element={
                <>
                  <Hats />
                </>
              }
            />
          </Route>
          <Route
            path="/contact"
            element={
              <>
                <Contect />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Signinpage />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
