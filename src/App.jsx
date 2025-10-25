import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import './global.css';
import { useStore } from './contexts/storeReducer';
import useFavicon from './utilities/favicon';
import fetchData from './utilities/fetchData';

import Layout from './components/Layout';
import Shopping from './pages/Shopping';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const { dispatch } = useStore();

  useFavicon();

  useEffect(() => {
    async function fetching() {
      dispatch({ type: 'loading', payload: null });
      const data = await fetchData();
      console.log(data);
      dispatch({ type: 'ready', payload: data });
    }
    fetching();
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/shopping', element: <Shopping /> },
        { path: '/cart', element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
