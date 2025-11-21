import styles from './loading.module.scss';

export default function LoadingAbout() {
  return (
    <div aria-busy="true" className={styles.loadingAbout}>
      <div className={styles.loadingBarPrimary} />
      <div className={styles.loadingBarSecondary} />
    </div>
  );
}
