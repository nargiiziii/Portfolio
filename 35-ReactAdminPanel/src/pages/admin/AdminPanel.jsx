import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  createProducts,
  deleteProducts,
  updateProducts,
} from "../../redux/features/productSlice";
import CreateProductModal from "../../utils/modal/Modal";
import { Link, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(createProducts(formData));
    handleClose();
    setFormData({ image: "", title: "", category: "", price: "" });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    dispatch(updateProducts(formData));
    handleClose();
    setFormData({ image: "", title: "", category: "", price: "" });
  };

  const prodDetailNavigate = (productId) => {
    navigate(`/products/${productId}`); 
  };
  
  return (
    <div>
      <Button variant="success" style={{ margin: "25px" }} onClick={handleOpen}>
        create
      </Button>

      <CreateProductModal
        open={open}
        handleClose={handleClose}
        handleChange={handleChange}
        formData={formData}
        handleSubmit={formData.id ? handleEditProduct : handleAddProduct}
      />

      <Table
        striped
        bordered
        hover
        style={{
          width: "1500px",
          textAlign: "center",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <thead>
          <tr>
            <th>image</th>
            <th>title</th>
            <th>category</th>
            <th>price</th>
            <th>settings</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr
                key={product.id}
                style={{ verticalAlign: "middle" }}
                onClick={() => prodDetailNavigate(product.id)} 
              >
                <td>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src={product.image}
                    alt=""
                    onClick={(e) => { e.stopPropagation(); prodDetailNavigate(product.id); }} 
                  />
                </td>
                <td>{product.title.slice(0, 25)}</td>
                <td>{product.category.slice(0, 25)}</td>
                <td>{product.price}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px",
                  }}
                >
                  <Button
                    variant="warning"
                    type="submit"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen();
                      setFormData(product);
                    }}
                  >
                    edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(deleteProducts(product.id));
                    }}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Link to="/">back</Link>
    </div>
  );
};

export default AdminPanel;
