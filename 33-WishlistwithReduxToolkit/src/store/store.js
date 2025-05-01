import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/features/productSlice";
import wishlistSlice from "../redux/features/wishlistSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
};

const persistedWishlistReducer = persistReducer(persistConfig, wishlistSlice);
const persistedProductReducer = persistReducer(persistConfig, productSlice);

export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    wishlist: persistedWishlistReducer,
  },
});

export const persistor = persistStore(store)