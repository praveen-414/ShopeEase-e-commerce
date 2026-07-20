import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
      setCart: (state, action) => {
      state.cart = action.payload;
    },
    setAddToCart: (state, action) => {
      const { product, quantity } = action.payload;

      const existingProduct = state.cart.find(
        (item) => item.product._id === product._id,
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({
          product,
          quantity,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.product._id !== action.payload,
      );
    },
  },
});

export const { setAddToCart, removeFromCart,setCart } = cartSlice.actions;

export default cartSlice.reducer;
