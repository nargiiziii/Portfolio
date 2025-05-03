import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWishlist, clearWishlist } from "../../redux/features/wishlistSlice"; 

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.myWishlist);
  const dispatch = useDispatch();

  const containerStyle = {
    width: "800px",
    margin: "0 auto",
    padding: "20px",
    height: "100vh",
  };

  const wishlistStyle = {
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

  const clearBtnStyle = {
    backgroundColor: "darkred",
    border: "1px solid darkred",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
  };

  const removeWishProduct = (itemId) => {
    dispatch(updateWishlist({ id: itemId }));
  };

  const ClearAllWish = () => {
    dispatch(clearWishlist());
  };

  return (
    <div style={containerStyle}>
      <div className="wishlist" style={wishlistStyle}>
        {wishlist &&
          wishlist.map((item) => (
            <div key={item.id} style={cardStyle}>
              <button style={btnStyle} onClick={() => removeWishProduct(item.id)}>
                Remove
              </button>
              <div style={contentStyle}>
                <img src={item.image} alt={item.title} style={imgStyle} />
                <div style={infoStyle}>
                  <p><b>{item.title.slice(0, 40)}</b></p>
                  <p>category: {item.category}</p>
                  <p>price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button style={clearBtnStyle} onClick={ClearAllWish}>
        clear all
      </button>
    </div>
  );
};

export default Wishlist;
