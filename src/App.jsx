import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import './global.css';
import Layout from './components/Layout';
import Shopping from './pages/Shopping';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: 'shopping', element: <Shopping /> },
          { path: 'cart', element: <Cart /> },
        ],
      },
    ],
    { basename: '/uniqlo/' }
  );

  return <RouterProvider router={router} />;
}

export default App;
