import Cartitemslice from "./slice/Cartitemslice";
import Counterslice from "./slice/Counterslice";
import dataSlice from "./slice/Dataslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    datas: dataSlice,
    counter:Counterslice,
    cartitem: Cartitemslice
  },
});
export default store;
