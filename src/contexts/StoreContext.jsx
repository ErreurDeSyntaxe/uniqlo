import { createContext, useEffect, useReducer } from 'react';
import { reducer, initialState } from './storeReducer';
import fetchData from '../utilities/fetchData';

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, cart, status } = state;

  useEffect(() => {
    async function fetching() {
      try {
        dispatch({ type: 'loading', payload: null });
        const data = await fetchData();
        dispatch({ type: 'ready', payload: data });
      } catch (err) {
        console.log(err);
        dispatch({ type: 'error', payload: null });
      }
    }
    fetching();
  }, [dispatch]);

  return (
    <StoreContext.Provider value={{ dispatch, products, cart, status }}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreProvider, StoreContext };
