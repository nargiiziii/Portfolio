import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../redux/features/productSlice";
import wishlistSlice from "../redux/features/wishlistSlice";
import basketSlice from "../redux/features/basketSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";  //persist ile konsolda olan middleware problemi getsin deye bu kodu isletdim

const persistConfig = {
  key: "root",
  storage,
};

const persistedWishlistReducer = persistReducer(persistConfig, wishlistSlice);
const persistedProductReducer = persistReducer(persistConfig, productSlice);
const persistedBasketReducer = persistReducer(persistConfig, basketSlice);

export const store = configureStore({
  reducer: {
    products: persistedProductReducer,
    wishlist: persistedWishlistReducer,
    basket: persistedBasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
