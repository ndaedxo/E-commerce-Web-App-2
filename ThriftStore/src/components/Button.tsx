// src/components/Button.tsx
import React from 'react';
import styles from '../styles/components/Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = 'default', disabled, type = 'button' }) => {
  const variantClass = variant === 'outline' ? styles.outline : variant === 'ghost' ? styles.ghost : styles.default;

  return (
    <button
      type={type}
      className={`${styles.btn} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
