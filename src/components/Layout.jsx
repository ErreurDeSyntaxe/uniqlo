import { Outlet } from 'react-router';
import { useStore } from '../contexts/storeReducer';

import Header from './Header';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';

function Layout() {
  const { status } = useStore();

  return (
    <>
      <Header />
      {status == 'loading' ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default Layout;
