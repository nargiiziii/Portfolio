import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register/Register";
import Products from "./components/products/Products";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
