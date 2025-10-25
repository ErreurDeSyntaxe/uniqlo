import { createContext, useReducer } from 'react';
import { reducer, initialState } from './storeReducer';

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, cart, status } = state;

  return (
    <StoreContext.Provider value={{ dispatch, products, cart, status }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
