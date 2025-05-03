import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";


const styles = {
  navbar: {
    backgroundColor: "gray",
    color: "white",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "24px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: "#ffffff",
    textDecoration: "none",
  },
};

const Navbar = () => {

  const wishlist = useSelector((state) => state.wishlist.myWishlist)

  const basket = useSelector((state) => state.basket.myBasket);

  let basketCount = basket.reduce((sum, prod) => sum + prod.count, 0)

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MySite</div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/">home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/wishlist">
            <FaHeart />
          </Link>
          <sup style={{margin: "5px"}}>{wishlist.length}</sup>
        </li>
        <li style={styles.navItem}>
          <Link to="/basket">
            <FaShoppingCart />
          </Link>
          <sup style={{margin: "5px"}}>{basketCount}</sup>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
