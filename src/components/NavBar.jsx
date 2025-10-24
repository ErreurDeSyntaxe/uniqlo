import { Link } from 'react-router';
import Icon from './Icon';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link to="/">
            <Icon icon={'home'} alt={'Home icon'} />
          </Link>
        </li>
        <li>
          <Link to="/shopping">
            <Icon icon={'shopping'} alt={'Shopping icon'} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <Icon icon={'cartEmpty'} alt={'Cart icon'} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
