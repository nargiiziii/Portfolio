import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";

const initialState = {
  myBasket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let existProd = state.myBasket.find(
        (prod) => prod.id == action.payload.id
      );
      if (!existProd) {
        state.myBasket.push({ ...action.payload, count: 1 });
        toast("added to basket!!");
      } else {
        existProd.count += 1;
        toast("added to basket!!");
      }
    },
    removeBasketProd: (state, action) => {
      state.myBasket = state.myBasket.filter(
        (prod) => prod.id != action.payload
      );
      toast("product removed from basket!!");
    },
    increment: (state, action) => {
      let findProduct = state.myBasket.find(
        (prod) => prod.id == action.payload
      );
      if (findProduct) {
        findProduct.count += 1;
      } else {
        toast("cannot increment..product is not in the basket!!");
      }
    },
    decrement: (state, action) => {
      let findProduct = state.myBasket.find(
        (prod) => prod.id == action.payload
      );
      if (findProduct) {
        if (findProduct.count > 1) {
          findProduct.count -= 1;
        } else {
          console.log("cannot decrease when count less than one!!");
        }
      } else {
        toast("cannot decrement..product is not in the basket!!");
      }
    },
    deleteAllBasket:(state) => {
        state.myBasket= []
        toast("deleted all from basket!!");
    }
  },
});

export const { addBasket, removeBasketProd, increment, decrement, deleteAllBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
