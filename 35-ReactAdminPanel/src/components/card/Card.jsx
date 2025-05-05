import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts } from "../../redux/features/productSlice";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import {
  updateWishlist,
  getWishlist,
} from "../../redux/features/wishlistSlice";
import { addBasket } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(getWishlist);

  const products = useSelector(selectAllProducts);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  let navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "12px",
        maxWidth: "1200px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "lightgray",
              borderRadius: "10px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              width: "300px",
              position: "relative",
            }}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(updateWishlist(product));
              }}
            >
              {isInWishlist(product.id) ? (
                <IoMdHeart size={25} color="red" />
              ) : (
                <IoMdHeartEmpty size={25} color="black" />
              )}
            </span>

            <p>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                }}
                src={product.image}
                alt={product.title}
              />
            </p>
            <h3 style={{ fontSize: "18px", color: "black" }}>
              {product.title}
            </h3>
            <p style={{ color: "gray" }}>category: {product.category}</p>
            <p style={{ color: "blue", fontWeight: "bold" }}>
              ${product.price}
            </p>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "lightBlue",
                color: "black",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
              }}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addBasket(product));
              }}
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
