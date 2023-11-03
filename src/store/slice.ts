import { createSlice } from "@reduxjs/toolkit";
import { sliceData } from "../../type";

interface NexType {
  productData: sliceData[];
  favouriteData: sliceData[];
  userLogin: null | string;
}
const initialState: NexType = {
  productData: [],
  favouriteData: [],
  userLogin: null,
};
export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingData = state.productData.find(
        (item: sliceData) => item.id === action.payload.id
      );
      if (existingData) {
        existingData.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavourite: (state, action) => {
      const existingData = state.favouriteData.find(
        (item: sliceData) => item.id === action.payload.id
      );
      if (existingData) {
        existingData.quantity += action.payload.quantity;
      } else {
        state.favouriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingData = state.productData.find(
        (item: sliceData) => item.id === action.payload.id
      );
      existingData && existingData.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingData = state.productData.find(
        (item: sliceData) => item.id === action.payload.id
      );
      if (existingData?.quantity == 1) {
        existingData.quantity = 1;
      } else {
        existingData!.quantity--;
      }
    },
    deletProduct: (state, action) => {
      // state.productData.find((item: sliceData) => item.id !== action.payload);
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});
export const {
  addToCart,
  addToFavourite,
  increaseQuantity,
  decreaseQuantity,
  deletProduct,
  resetCart,
} = nextSlice.actions;
export default nextSlice.reducer;
