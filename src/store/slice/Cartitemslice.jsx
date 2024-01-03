import { createSlice } from "@reduxjs/toolkit";

const cartitemslice = createSlice({
  name: "cartitem",
  initialState: {
    cartitemdata: [],
  },
  reducers: {
    additemtocart: (state, action) => {
        const itemIndex=state.cartitemdata.findIndex((item)=>item.id===action.payload.id);
        console.log(itemIndex);
        if (itemIndex>=0) {
            state.cartitemdata[itemIndex].cartQuantity +=1
        }else{
            const addQuantity={...action.payload, cartQuantity:1}
            state.cartitemdata.push(addQuantity);
        }

    },
  },
});
export const { additemtocart } = cartitemslice.actions;
export default cartitemslice.reducer;
