import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import userSlice from "./slices/userSlice"
import productSlice from "./slices/productSlice"
import cartSlice from "./slices/cartSlice";
import checkOutSlice from "./slices/checkOutSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    user:userSlice,
    products:productSlice,
    theme: themeSlice,
    cart:cartSlice,
    checkout: checkOutSlice,
    search:searchSlice
  },
});

export default store;
