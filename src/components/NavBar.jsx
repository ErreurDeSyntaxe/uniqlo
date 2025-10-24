import Icon from './Icon';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Icon icon={'home'} alt={'Home icon'} />
        </li>
        <li>
          <Icon icon={'store'} alt={'Store icon'} />
        </li>
        <li>
          <Icon icon={'cartEmpty'} alt={'Cart icon'} />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
