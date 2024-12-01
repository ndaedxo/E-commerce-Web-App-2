// types.ts

export interface User {
    id: string;
    // other user properties
  }
  
  export interface UserProfile {
    // user profile properties
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    // other product properties
  }
  
  export interface ShippingInfo {
    // shipping info properties
  }
  
  export interface PaymentInfo {
    // payment info properties
  }
  
  export interface CheckoutState {
    step: 'shipping' | 'payment' | 'complete';
    shippingInfo: ShippingInfo | null;
    paymentInfo: PaymentInfo | null;
  }
  
  export interface Order {
    id: string;
    date: string;
    total: number;
    status: string;
    // other order properties
  }
  