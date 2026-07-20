import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    shippingAddress: {},
    paymentMethod: "",
  },
  reducers: {
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    clearCheckout: (state) => {
      state.shippingAddress = {};
      state.paymentMethod = "";
    },
  },
});

export const {
  setShippingAddress,
  setPaymentMethod,
  clearCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;