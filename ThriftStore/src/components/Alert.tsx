// src/components/Alert.tsx
import React from 'react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive';
  className?: string; // Add this line
}

const Alert: React.FC<AlertProps> = ({ children, variant = 'default', className = '' }) => {
  return (
    <div
      className={`rounded-lg border p-4 ${variant === 'destructive' ? 'border-red-600 bg-red-50' : 'border-blue-200 bg-blue-50'} ${className}`} // Include className here
      role="alert"
    >
      {children}
    </div>
  );
};

interface AlertTitleProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive';
}

const AlertTitle: React.FC<AlertTitleProps> = ({ children, variant = 'default' }) => {
  return (
    <h5 className={`mb-1 font-medium leading-none tracking-tight ${variant === 'destructive' ? 'text-red-800' : 'text-blue-800'}`}>
      {children}
    </h5>
  );
};

interface AlertDescriptionProps {
  children: React.ReactNode;
  variant?: 'default' | 'destructive';
}

const AlertDescription: React.FC<AlertDescriptionProps> = ({ children, variant = 'default' }) => {
  return (
    <div className={`text-sm ${variant === 'destructive' ? 'text-red-700' : 'text-blue-700'}`}>
      {children}
    </div>
  );
};

export { Alert, AlertTitle, AlertDescription };
