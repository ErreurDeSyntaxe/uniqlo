import { useContext } from 'react';
import { StoreContext } from './StoreContext';

const initialState = {
  products: [],
  cart: [],
  status: 'ready',
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'loading':
      return { ...state, status: 'loading' };

    case 'ready':
      return { ...state, status: 'ready', products: payload };

    case 'cart/addItem': {
      const existingItem = state.cart.find((item) => item.id === payload.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { id: payload.id, quantity: payload.quantity }],
        };
      }
    }

    case 'cart/removeItem':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case 'cart/increment':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            console.log(typeof item.quantity);
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case 'cart/decrement':
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case 'cart/clear':
      return {
        ...state,
        cart: [],
      };

    case 'error':
      return { ...state, status: 'error' };

    default:
      return state;
  }
}

function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined)
    throw new Error('StoreContext was used outside StoreProvider');
  return context;
}

export { initialState, reducer, useStore };
