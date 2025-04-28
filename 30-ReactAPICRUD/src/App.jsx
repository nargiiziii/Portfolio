import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { v4 as uuid4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import Products from "./pages/products/Products";

function App() {
  let url = "https://fakestoreapi.com/products";

  const [allProductsData, setallProductsData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [inputTitleValue, setinputTitleValue] = useState("");
  const [inputPriceValue, setinputPriceValue] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  let getAllProducts = async () => {
    try {
      let response = await axios.get(url);
      setallProductsData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // ADD AREA

  let addProduct = () => {
    let newProduct = {
      id: uuid4(),
      title: inputTitleValue,
      price: Number(inputPriceValue),
    };
    setallProductsData([...allProductsData, newProduct]);
    setinputTitleValue("");
    setinputPriceValue("");
    toast("added new product!!");
  };

  // DELETE AREA

  let deleteProduct = (id) => {
    let deletedProdIndex = allProductsData.findIndex(
      (product) => product.id === id
    );
    allProductsData.splice(deletedProdIndex, 1);
    setallProductsData([...allProductsData]);
    toast("product deleted!!");
  };

  // EDIT AREA

  let editProduct = (product) => {
    setIsEditing(true);
    setEditingId(product.id);
    setinputTitleValue(product.title);
    setinputPriceValue(product.price);
  };

  let updateProduct = () => {
    const updatedProducts = allProductsData.map((product) =>
      product.id === editingId
        ? { ...product, title: inputTitleValue, price: Number(inputPriceValue) }
        : product
    );
    setallProductsData(updatedProducts);

    setIsEditing(false);
    setEditingId(null);
    setinputTitleValue("");
    setinputPriceValue("");
    toast("product edited!!");
  };

  // RESET AREA

  let resetProducts = () => {
    setallProductsData([]);
    toast("all produts reset!!");
  };


  return (
    <>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="app">
          <div className="inputs">
            <input
              type="text"
              placeholder="write product title"
              value={inputTitleValue}
              onChange={(e) => setinputTitleValue(e.target.value)}
            />

            <input
              type="text"
              placeholder="write product price"
              value={inputPriceValue}
              onChange={(e) => setinputPriceValue(e.target.value)}
            />
          </div>

          <button  className="main_btn" onClick={isEditing ? updateProduct : addProduct}>
            {isEditing ? "edit product" : "add product"}
          </button>

          <Products
            products={allProductsData}
            forDelete={deleteProduct}
            forEdit={editProduct}
          />

          <button className="main_btn" onClick={() => resetProducts()}>reset</button>

          <ToastContainer />
        </div>
      )}
    </>
  );
}

export default App;
