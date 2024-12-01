// ThriftStore/src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser , FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import styles from '../styles/components/Navbar.module.css';

// Import the logo image
import logoImage from '../assets/logo.png'; // Adjust path as necessary

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" aria-label="Go to homepage">
          <img src={logoImage} alt="Thrift Store Logo" className={styles.logoImage} />
        </Link>
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle navigation menu">
        {isMenuOpen ? <FaTimes className={styles.menuIcon} /> : <FaBars className={styles.menuIcon} />}
      </button>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/shop" className={styles.navLink}>Shop</Link>
        <Link to="/about" className={styles.navLink}>About Us</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
        <Link to="/customer-dashboard" className={styles.navLink}>Customer Dashboard</Link>
        <Link to="/admin-dashboard" className={styles.navLink}>Admin Dashboard</Link>
        {/* Add more links as needed */}
      </div>
      <div className={styles.authSection}>
        <Link to="/login" className={`${styles.authLink} ${styles.button}`}>Login</Link>
        <Link to="/register" className={`${styles.authLink} ${styles.button}`}>Register</Link>
      </div>
      <div className={styles.iconsSection}>
        <Link to="/profile" className={styles.iconLink}>
          <FaUser className={styles.icon} />
        </Link>
        <Link to="/cart" className={styles.iconLink}>
          <FaShoppingCart className={styles.icon} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
