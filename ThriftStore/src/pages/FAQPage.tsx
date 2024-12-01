//ThriftStore\src\pages\FAQPage.tsx
import React from 'react';

const FAQPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">What is Thrift Store?</h2>
          <p>Thrift Store is an online marketplace for high-quality second-hand items. We offer a wide variety of products, including clothing, home decor, and more.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How do I place an order?</h2>
          <p>To place an order, browse our products, add your desired items to the cart, and proceed to checkout. Follow the prompts to complete your purchase.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What payment methods do you accept?</h2>
          <p>We accept major credit cards, PayPal, and other secure payment methods. Payment options are available at checkout.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How can I contact customer support?</h2>
          <p>You can reach our customer support team via the Contact page. We’re here to help with any questions or concerns you may have.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
