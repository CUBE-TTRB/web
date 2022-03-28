import styles from './auth.module.scss'
import ConnectForm from '../connectForm/connectForm'
import ForgetForm from '../forgetForm/forgetForm'
import CreateForm from '../createForm/createForm'


export default function auth() {
  return (
    <section className={styles.auth}>
        <div className={styles.auth__header}>
            <h2 className={styles.auth__header__title}>Auth</h2>
            <img className={styles.auth__header__close} src="/icons/icon_navigation_close.svg" alt="test" />
        </div>
        <div className={styles.auth__main}>
            <ConnectForm />
            <ForgetForm />
            <CreateForm />
        </div>
    </section>
    
  )
}
