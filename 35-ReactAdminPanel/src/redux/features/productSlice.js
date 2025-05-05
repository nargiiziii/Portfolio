import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/products";

const initialState = {
  allProducts: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let response = await axios.get(baseUrl);
    let prodData = response.data;
    return prodData;
  }
);

export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (product) => {
    let response = await axios.post(baseUrl, product);
    let prodData = response.data;
    return prodData;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async (product) => {
    let response = await axios.put(`${baseUrl}/${product.id}`, product);
    let prodData = response.data;
    return prodData;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.allProducts.push(action.payload);
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      state.allProducts = state.allProducts.filter(
        (prod) => prod.id !== action.payload
      );
    });
    builder.addCase(updateProducts.fulfilled, (state, action) => {
      state.allProducts = state.allProducts.map((prod) =>
        prod.id === action.payload.id ? action.payload : prod
      );
    });    
  },
});

export const selectAllProducts = (state) => state.products.allProducts;

export default productSlice.reducer;
