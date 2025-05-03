import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../redux/features/productSlice";
import { useParams } from "react-router-dom";
import { addBasket, decrement, increment } from "../../redux/features/basketSlice";

const ProdDetail = () => {

  const products = useSelector(selectAllProducts);

  let { id } = useParams();

  const findProd = products.find((prod) => prod.id === id);

  const basket = useSelector((state) => state.basket.myBasket)

  const prodInBasket = basket.find((prod) => prod.id == findProd.id);
  const prodCount= prodInBasket ? prodInBasket.count : 0;

  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);
  

  const prodDetailStyle = {
    display: "flex",
    alignItems: "center",
    gap: "70px",
    justifyContent: "center",
    padding:"40px"
  };

  const prodInfoStyle = {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "start",
  };

  const plusMinusStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "10px",
  };

  const buttonStyle = {
    width: "28px",
    height: "28px",
    borderRadius: "4px",
    backgroundColor: "lightGray",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
    lineHeight: "28px",
  };

  const countStyle = {
    minWidth: "20px",
    textAlign: "center",
    fontSize: "16px",
  };

  const BtnStyle = {
    backgroundColor: "darkred",
    border: "1px solid darkred",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <>
      <div className="prod_detail" style={prodDetailStyle}>
        <img src={findProd.image} alt="" style={{width:"250px", height:"250px"}}/>
        <div className="prod_info" style={prodInfoStyle}>
          <h1 style={{ fontSize: "22px" }}>{findProd.title.slice(0, 25)}</h1>
          <p style={{ fontSize: "15px" }}>category: {findProd.category}</p>
          <p style={{ fontSize: "22px" }}>price: ${findProd.price}</p>
          <p style={{ fontSize: "15px" }}>
            {findProd.description.slice(0, 40)}
          </p>
          <div className="plus_minus" style={plusMinusStyle}>
            <div
              className="minus"
              style={buttonStyle}
              onClick={() => dispatch(decrement(findProd.id))}
            >
              -
            </div>
            <div className="count" style={countStyle}>
              {prodCount}
            </div>
            <div
              className="plus"
              style={buttonStyle}
              onClick={() => dispatch(increment(findProd.id))}
            >
              +
            </div>
          </div>
          <button className="btn" style={BtnStyle} onClick={() => dispatch(addBasket(findProd))}>
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProdDetail;
