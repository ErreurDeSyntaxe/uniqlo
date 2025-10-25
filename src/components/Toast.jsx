import styles from './Toast.module.css';

function Toast({ message }) {
  if (!message) return null; // don't render if empty
  return <div className={styles.toast}>{message}</div>;
}

export default Toast;
