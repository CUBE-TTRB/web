import styles from './auth.module.scss'
import ConnectForm from '../connectForm/connectForm'
import ForgetForm from '../forgetForm/forgetForm'
import CreateForm from '../createForm/createForm'
import { useState, useEffect } from "react"
import Link from 'next/link'

export default function auth() {

  const forms = {
    connectForm : true,
    forgetForm : false,
    createForm : false
  }

  const [actives, setActives] = useState(forms)


  const mainBackground = (
    actives.connectForm ? `${styles.auth__main} ${styles.white}`:
    actives.forgetForm ? `${styles.auth__main} ${styles.blue}`:
    `${styles.auth__main} ${styles.green}`
  );


  function setFormsActive(string){
    let temp = { ...forms };
    Object.keys(forms).map((el)=> temp[el] = false);
    temp[string] = true;
    setActives(temp);
    
  };


  return (
    <section className={styles.auth}>
        <div className={styles.auth__header}>
            <h2 className={styles.auth__header__title}>Auth</h2>
            <Link href="/"><img className={styles.auth__header__close} src="/icons/icon_navigation_close.svg" alt="test" /></Link>
            
        </div>
        <div className={mainBackground}>
            <ConnectForm isActive={actives.connectForm} setFormsActive={setFormsActive}/>
            <ForgetForm isActive={actives.forgetForm} setFormsActive={setFormsActive}/>
            <CreateForm isActive={actives.createForm} setFormsActive={setFormsActive}/>
        </div>
    </section>
    
  )
}
