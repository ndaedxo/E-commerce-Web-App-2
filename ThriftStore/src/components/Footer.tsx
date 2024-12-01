// ThriftStore/src/components/Footer.tsx
import React from 'react';
import styles from '../styles/components/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Subscribe to Our Newsletter</h3>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <p>123 Main St, Anytown, ST 12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                </div>
            </div>
            <div className={styles.footerCopyright}>
                © 2024 Your Company Name. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
