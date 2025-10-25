import styles from './Header.module.css';
import NavBar from './NavBar';

function Header() {
  return (
    <>
      <NavBar />
      <h1 className={styles.header}>
        Uniqlo — The <span>Unique</span> Brand
      </h1>
    </>
  );
}

export default Header;
