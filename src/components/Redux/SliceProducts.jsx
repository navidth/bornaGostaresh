import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: [],
  errors: [],
};

const productSlice = createSlice({
  name: "addUrl",
  initialState,
  reducers: {
    addUrl: (state, actions) => {
      let valueState = actions.payload;
      state.url = [...state.url, valueState];
    },
    handleError: (state, actions) => {
      state.errors.push(actions.payload);
    },
  },
});
export const { addUrl, handleError } = productSlice.actions;
export default productSlice.reducer;
