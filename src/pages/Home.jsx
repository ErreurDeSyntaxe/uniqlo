import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useStore } from '../contexts/storeReducer';

import ProductCard from '../components/ProductCard';

function Home() {
  const { products } = useStore();
  const lastBrowsed = products.slice(0, 4);

  return (
    <section className={styles.home}>
      <div className={styles.hero}></div> {/* background hero */}
      <h1 className={styles.heading}>Welcome back, Username!</h1>
      <p className={styles.subheading}>
        Revisit your favorite styles or explore new arrivals.
      </p>
      <div className={styles.lastBrowsed}>
        <p className={styles.lastBrowsedTitle}>Last time, you browsed:</p>
        <div className={styles.browsedContainer}>
          {lastBrowsed.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Link to="/shopping" className={styles.homeBtn}>
        Shop Now
      </Link>
    </section>
  );
}

export default Home;
