import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import styles from "./Header.module.css";
import axios from "axios";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const user = response.data.find(user => user.isLogined === true);
        setIsLogined(user ? true : false); 
      } catch (error) {
        console.error("errorr", error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const user = response.data.find(user => user.isLogined === true);

      if (user) {
        await axios.patch(`http://localhost:3000/users/${user.id}`, {
          isLogined: false
        });
        setIsLogined(false); 
        navigate("/login");
      }
    } catch (error) {
      console.error("error log out:", error);
    }
  };

  return (
    <div className={styles.header}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/todo">To do app</Link>
        </li>
        {isLogined ? (
          <>
            <li className={styles.navItem}>
              <button onClick={handleLogout}>logout</button>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navItem}>
              <Link to="/register">register</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/login">login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
