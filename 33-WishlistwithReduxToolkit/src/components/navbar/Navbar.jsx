import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  navbar: {
    backgroundColor: 'gray',
    color: 'white',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '24px',
    margin: 0,
    padding: 0
  },
  navItem: {
    color: '#ffffff',
    textDecoration: 'none',
  }
};

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>MySite</div>
      <ul style={styles.navList}>
        <li  style={styles.navItem}><Link to= "/">home</Link></li>
        <li  style={styles.navItem}><Link to="/wishlist">wishlist</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
