import "./App.css";
import Layout from "./components/layout/Layout";
import Wishlist from "./pages/wishlist/Wishlist";
import Basket from "./pages/basket/Basket";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { persistor,store } from "./store/store";

import { PersistGate } from "redux-persist/integration/react";


import { ToastContainer, toast } from "react-toastify";
import ProdDetail from "./pages/prodDetail/ProdDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/basket",
        element: <Basket/>,
      },
      {
        path: "/products/:id",
        element: <ProdDetail/>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <ToastContainer autoClose={1000}/>
      </PersistGate>
    </Provider>
  );
}

export default App;
