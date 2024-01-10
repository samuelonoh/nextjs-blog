import styles from './layout.module.css';

export default function layout({ children }) {
  const name = 'Samuel onoh'
  return (
    <div className={styles.container}>{children}</div>
  )
}
