import { Link } from 'react-router-dom';
import { useStore } from '../contexts/storeReducer';

import Icon from './Icon';
import styles from './NavBar.module.css';

function NavBar() {
  const { cart } = useStore();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">
            <Icon icon="home" alt="Home icon" />
          </Link>
        </li>
        <li>
          <Link to="/shopping">
            <Icon icon="shopping" alt="Shopping icon" />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <Icon icon="cartEmpty" alt="Cart icon" />
            {cart.length === 0 ? null : (
              <Icon
                icon={`number${cart.length < 10 ? cart.length : '9plus'}`}
                alt="Cart icon"
              />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
