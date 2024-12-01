// src/components/Select.tsx
import React from 'react';

interface SelectProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string; // Optional aria-label for accessibility
}

const Select: React.FC<SelectProps> = ({ value, onChange, className, children, ariaLabel }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md p-2 ${className}`} // Tailwind CSS styling
      aria-label={ariaLabel}
    >
      {children}
    </select>
  );
};

export default Select;
