import { useState } from 'react';
import { useStore } from '../contexts/storeReducer';

import styles from './Shopping.module.css';
import ProductCard from '../components/ProductCard';

function Shopping() {
  const [search, setSearch] = useState('');
  const { products } = useStore();

  return (
    <div className={styles.container}>
      <h1>Shop</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />

      <div className={styles.grid}>
        {products
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Shopping;
