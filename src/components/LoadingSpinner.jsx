import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer} aria-label="loading spinner">
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingSpinner;
