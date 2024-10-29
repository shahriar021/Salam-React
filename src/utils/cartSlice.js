import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // clearCart: () => {
    //   state.items.length = 0;
    // },
    clearCart: (state) => {
      state.items = []; // Set items to an empty array
      console.log("Cart cleared. Updated cart items:", state.items); // Log cleared cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
