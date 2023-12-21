import dataSlice from "./slice/Dataslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    datas: dataSlice,
  },
});
export default store;
