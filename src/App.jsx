import './global.css';
import useFavicon from './utilities/favicon';

import Footer from './components/Footer';
import Header from './components/Header';
import Store from './components/Store';

function App() {
  useFavicon();

  return (
    <>
      <Header />
      <Store />
      <Footer />
    </>
  );
}

export default App;
