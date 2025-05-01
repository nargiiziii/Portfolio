import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/products";
 
const initialState = {
  allProducts: [],
};

export const fetchProducts = createAsyncThunk("products", async () => {
  let response = await axios.get(baseUrl);
  let prodData = response.data;
  return prodData;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export const selectAllProducts = (state) => state.products.allProducts;

export default productSlice.reducer;
