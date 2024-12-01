//ThriftStore/src/pages/NotFoundPage.tsx
// # 404/error page component
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 text-center bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 underline hover:text-blue-700">Go back to the homepage</a>
    </div>
  );
};

export default NotFoundPage;

