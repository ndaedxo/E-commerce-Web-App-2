//ThriftStore\src\pages\AboutPage.tsx
import React from 'react';
import styles from '../styles/pages/About.module.css';

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About Us</h1>
      <p>Welcome to the Thrift Store! We are dedicated to providing high-quality second-hand items at affordable prices. Our mission is to promote sustainable living through the reuse of goods and to offer unique finds for our customers.</p>
      <p>Our team is passionate about curating a diverse selection of items, from vintage clothing to eclectic home décor. We believe in the value of every item and the stories they carry. Thank you for supporting our store and contributing to a more sustainable future.</p>
    </div>
  );
};

export default About;
