import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateProductModal = ({
  open,
  handleClose,
  handleChange,
  formData,
  handleSubmit,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          {formData.id ? "edit product" : "create product"}
        </Typography>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductImage">
            <Form.Label>image URL</Form.Label>
            <Form.Control
              name="image"
              type="url"
              placeholder="enter image"
              onChange={handleChange}
              value={formData.image}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductTitle">
            <Form.Label>title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="enter title"
              onChange={handleChange}
              value={formData.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductCategory">
            <Form.Label>category</Form.Label>
            <Form.Control
              name="category"
              type="text"
              placeholder="enter category"
              onChange={handleChange}
              value={formData.category}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <Form.Label>price</Form.Label>
            <Form.Control
              name="price"
              type="number"
              placeholder="enter price"
              onChange={handleChange}
              value={formData.price}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {formData.id ? "edit product" : "add product"}
          </Button>
        </Form>
      </Box>
    </Modal>
  );
};

export default CreateProductModal;
