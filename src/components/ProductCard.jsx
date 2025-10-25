import { useState } from 'react';
import { useStore } from '../contexts/storeReducer';
import styles from './ProductCard.module.css';
import Toast from './Toast';

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { dispatch } = useStore();
  const { id, title, price, image, rating } = product;
  const [toast, setToast] = useState('');

  function handleAddToCart() {
    dispatch({
      type: 'cart/addItem',
      payload: { id, quantity: quantity },
    });
    setToast(`${product.title} added to cart!`);
    setTimeout(() => setToast(''), 3000); // clear toast after 3s
  }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <p className={styles.rating}>
          ⭐ {rating.rate} ({rating.count})
        </p>
        <div className={styles.actions}>
          <button
            className={styles.decrement}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="number"
            min={1}
            className={styles.qty}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className={styles.increment}
            onClick={() => setQuantity((q) => q + 1)}
          >
            +
          </button>
          <button className={styles.add} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {toast && <Toast message={toast} />}
    </div>
  );
}

export default ProductCard;
