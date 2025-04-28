import React from "react";
import Product from "../../components/product/Product";

const Products = ({ products, forDelete, forEdit }) => {
  return (
    <div>
      {products &&
        products.map((productItem) => (
            <Product
              key={productItem.id}
              singleProd={productItem}
              singleDelete={() => forDelete(productItem.id)}
              singleEdit={() => forEdit(productItem)}
            />
        ))}
    </div>
  );
};

export default Products;
