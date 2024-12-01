// ThriftStore\src\pages\TermsPage.tsx
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Use of Service</h2>
        <p>You agree to use our service only for lawful purposes and in accordance with these Terms of Service.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Product Information</h2>
        <p>We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Pricing and Availability</h2>
        <p>Prices and availability of products are subject to change without notice. We reserve the right to limit quantities of purchased items.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Disclaimer of Warranties</h2>
        <p>Our service is provided "as is" without any warranties, expressed or implied. We do not guarantee that our service will be uninterrupted, timely, secure, or error-free.</p>
      </section>
    </div>
  );
};

export default TermsPage;