import { useContext } from 'react';
import { StoreContext } from './StoreContext';

const initialState = {
  products: [],
  cart: [],
  status: 'ready',
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };

    case 'ready':
      return { ...state, status: 'ready', products: action.products };

    default:
      break;
  }
}

function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined)
    throw new Error('StoreContext was used outside StoreProvider');
  return context;
}

export { initialState, reducer, useStore };
