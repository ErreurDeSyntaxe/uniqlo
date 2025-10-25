import styles from './ErrorMessage.module.css';

function ErrorMessage({ message = 'Something went wrong.' }) {
  return <div className={styles.message}>{message}</div>;
}

export default ErrorMessage;
