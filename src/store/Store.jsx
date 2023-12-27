import Counterslice from "./slice/Counterslice";
import dataSlice from "./slice/Dataslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    datas: dataSlice,
    counter:Counterslice
  },
});
export default store;
