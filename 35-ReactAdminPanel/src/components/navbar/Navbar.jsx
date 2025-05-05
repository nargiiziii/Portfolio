import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const wishlist = useSelector((state) => state.wishlist.myWishlist);
  const basket = useSelector((state) => state.basket.myBasket);

  let basketCount = basket.reduce((sum, prod) => sum + prod.count, 0);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MySite</div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/adminpanel">admin</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/wishlist">
            <FaHeart />
          </Link>
          <sup className={styles.sup}>{wishlist.length}</sup>
        </li>
        <li className={styles.navItem}>
          <Link to="/basket">
            <FaShoppingCart />
          </Link>
          <sup className={styles.sup}>{basketCount}</sup>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
