import { useStore } from '../contexts/storeReducer';
import styles from './Cart.module.css';

function Cart() {
  const { cart, products, dispatch } = useStore();

  const getProduct = (id) => products.find((p) => p.id === id);
  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + product.price * item.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Cart</h1>

      {cart.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map((item) => {
              const product = getProduct(item.id);
              return (
                <li key={item.id} className={styles.item}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                  <div className={styles.details}>
                    <h2 className={styles.name}>{product.title}</h2>
                    <p className={styles.price}>
                      ${(product.price * item.quantity).toFixed(2)}
                    </p>
                    <div className={styles.controls}>
                      <button
                        onClick={() =>
                          dispatch({ type: 'cart/decrement', payload: item.id })
                        }
                        className={styles.btn}
                      >
                        −
                      </button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: 'cart/increment', payload: item.id })
                        }
                        className={styles.btn}
                      >
                        +
                      </button>
                      <button
                        onClick={() =>
                          dispatch({
                            type: 'cart/removeItem',
                            payload: item.id,
                          })
                        }
                        className={styles.remove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.summary}>
            <p className={styles.totalLabel}>Total:</p>
            <p className={styles.totalValue}>${total.toFixed(2)}</p>

            <div className={styles.actions}>
              <button className={styles.checkout}>Proceed to Checkout</button>
              <button
                className={styles.clear}
                onClick={() => dispatch({ type: 'cart/clear' })}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
