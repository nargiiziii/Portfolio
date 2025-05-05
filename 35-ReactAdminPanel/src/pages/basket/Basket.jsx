import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeBasketProd,deleteAllBasket } from "../../redux/features/basketSlice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.myBasket);
  const dispatch = useDispatch();

  let totalPrice = basket.reduce((sum, prod) => sum + prod.count * prod.price, 0)

  const containerStyle = {
    width: "800px",
    margin: "0 auto",
    padding: "20px",
    height: "100vh",
  };

  const basketStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const cardStyle = {
    border: "1px solid black",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const imgStyle = {
    width: "120px",
    height: "auto",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const btnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "red",
    border: "1px solid red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
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

  const bottomStyle = {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  }
  

  const clearBtnStyle = {
    backgroundColor: "darkred",
    border: "1px solid darkred",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  };


  return (
    <div style={containerStyle}>
      <div className="wishlist" style={basketStyle}>
        {basket &&
          basket.map((item) => (
            <div key={item.id} style={cardStyle}>
              <button
                style={btnStyle}
                onClick={() => dispatch(removeBasketProd(item.id))}
              >
                Remove Basket
              </button>

              <div style={contentStyle}>
                <img src={item.image} alt={item.title} style={imgStyle} />
                <div style={infoStyle}>
                  <p>
                    <b>{item.title}</b>
                  </p>
                  <p>category: {item.category}</p>
                  <p>price: ${(item.price * item.count).toFixed(2)}</p>
                  <div className="plus_minus" style={plusMinusStyle}>
                    <div className="minus" style={buttonStyle} onClick={() => dispatch(decrement(item.id))}>
                      -
                    </div>
                    <div className="count" style={countStyle}>
                      {item.count}
                    </div>
                    <div className="plus" style={buttonStyle} onClick={() => dispatch(increment(item.id))}>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="bottom_area" style={bottomStyle}>
      <button style={clearBtnStyle} onClick={() => dispatch(deleteAllBasket())}>
        clear all
      </button>

      <p>total price: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Basket;
