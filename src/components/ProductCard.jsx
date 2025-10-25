import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const { title, price, image, rating } = product;

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
          <button className={styles.decrement}>-</button>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className={styles.qty}
          />
          <button className={styles.increment}>+</button>
          <button className={styles.add}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
