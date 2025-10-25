import { Outlet } from 'react-router';
import { useStore } from '../contexts/storeReducer';

import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

function Layout() {
  const { status } = useStore();

  return (
    <>
      <Header />
      {status === 'loading' && <LoadingSpinner />}
      {status === 'error' && <ErrorMessage />}
      {status !== 'loading' && status !== 'error' && <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
