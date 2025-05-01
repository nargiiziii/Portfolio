import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  myWishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      const product = action.payload;
      const exist = state.myWishlist.some((item) => item.id === product.id);

      if (exist) {
        state.myWishlist = state.myWishlist.filter(
          (item) => item.id !== product.id
        );
        console.log("deleted");
        toast("product deleted!!!")
      } else {
        state.myWishlist.push(product);
        console.log("added");
        toast("product added!!")
      }
    },
    clearWishlist: (state) => {
      state.myWishlist = [];
      console.log("all items removed");
      toast("all cards are deleted!!")
    },
  },
});

export const { updateWishlist } = wishlistSlice.actions;
export const { clearWishlist } = wishlistSlice.actions;

export const getWishlist = (state) => state.wishlist.myWishlist;

export default wishlistSlice.reducer;
