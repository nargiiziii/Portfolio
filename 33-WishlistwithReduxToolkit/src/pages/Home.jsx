import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../redux/features/productSlice";
import { updateWishlist } from "../redux/features/wishlistSlice";
import Card from "../components/card/Card";


const Home = () => {
  const products = useSelector(selectAllProducts);
  const wishlist = useSelector((state) => state.wishlist.myWishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const updateWishlistItem = (product) => {
    dispatch(updateWishlist(product));
    console.log("wishlist:", wishlist);
  };

  return (
    <div>
      <p>Home</p>
      {products &&
        products.map((product) => (
          <Card
            key={product.id}
            product={product}
            onAddWishlist={updateWishlistItem}
          />
        ))}
    </div>
  );
};

export default Home;
