// ThriftStore/src/pages/CheckoutPage.tsx
import React, { useState, FormEvent } from 'react';
import Button from '../components/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import ShippingForm from '../components/ShippingForm';
import PaymentForm from '../components/PaymentForm';

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 2) {  // Assuming you have 2 steps
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert('Order placed!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  {step === 1 ? 'Shipping Address' : 'Payment Details'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {step === 1 && <ShippingForm onSubmit={handleNextStep} />}
                {step === 2 && <PaymentForm onSubmit={handleSubmit} />}
              </CardContent>
            </Card>
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="outline" onClick={handlePreviousStep} className="w-full md:w-auto">
                  Back
                </Button>
              )}
              <Button onClick={handleNextStep} disabled={step === 2} className="w-full md:w-auto">
                {step === 1 ? 'Next' : 'Place Order'}
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between mb-4 text-gray-700">
                  <span>Subtotal:</span>
                  <span>$159.97</span>
                </div>
                <div className="flex justify-between mb-4 text-gray-700">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-900">
                  <span>Total:</span>
                  <span>$169.97</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
