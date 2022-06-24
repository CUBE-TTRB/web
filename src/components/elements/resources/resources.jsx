import styles from './resources.module.scss'


export default function ({children}) {
  return (
    <div className={styles.resources}>
      {children}
    </div>
  )
}
