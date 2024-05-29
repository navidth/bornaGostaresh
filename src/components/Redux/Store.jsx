import { configureStore } from "@reduxjs/toolkit";
import addLinks from "./SliceProducts";

const Store = configureStore({
  reducer: {
    url: addLinks,
  },
});
export default Store;
