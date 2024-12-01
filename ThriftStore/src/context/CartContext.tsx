import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the shape of your cart state
interface CartState {
  items: CartItem[];
  totalAmount: number;
}

// Define the shape of a cart item
interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

// Define the actions for your reducer
type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Define the initial state of the cart
const initialCartState: CartState = {
  items: [],
  totalAmount: 0,
};

// Cart reducer function
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.quantity;
      return { ...state, items: updatedItems, totalAmount: updatedTotalAmount };

    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const reducedTotalAmount = state.totalAmount - state.items.find(item => item.id === action.payload)!.price;
      return { ...state, items: filteredItems, totalAmount: reducedTotalAmount };

    case 'UPDATE_ITEM':
      const updatedItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const itemToUpdate = state.items[updatedItemIndex];
      const updatedItem = { ...itemToUpdate, quantity: action.payload.quantity };
      const adjustedItems = [...state.items];
      adjustedItems[updatedItemIndex] = updatedItem;
      const adjustedTotalAmount = state.totalAmount - (itemToUpdate.quantity * itemToUpdate.price) + (updatedItem.quantity * updatedItem.price);
      return { ...state, items: adjustedItems, totalAmount: adjustedTotalAmount };

    case 'CLEAR_CART':
      return { ...initialCartState };

    default:
      return state;
  }
}

// Create CartContext
export const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction> }>({
  state: initialCartState,
  dispatch: () => undefined,
});

// Create a provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
export const useCart = () => useContext(CartContext);
