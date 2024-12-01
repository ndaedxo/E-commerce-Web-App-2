//ThriftStore/src/pages/PrivacyPage.tsx
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information in certain circumstances, such as to comply with legal obligations or to protect our rights.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
      </section>
    </div>
  );
};

export default PrivacyPage;