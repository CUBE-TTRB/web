import styles from './auth.module.scss'
import ConnectForm from '../connectForm/connectForm'
import ForgetForm from '../forgetForm/forgetForm'
import CreateForm from '../createForm/createForm'
import { useState, useEffect } from "react"


export default function auth() {

  const forms = {
    connectForm : true,
    forgetForm : false,
    createForm : false
  }

  const [actives, setActives] = useState(forms)
  const [count, setCount] = useState(0);

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

  useEffect(() => {
      document.title = `You clicked ${count} times`;
  }, [count]);


  useEffect(() => {
    console.log("test", actives);
  }, [actives]);
  


  return (
    <section className={styles.auth}>
        <div className={styles.auth__header}>
            <h2 className={styles.auth__header__title}>Auth</h2>
            <img className={styles.auth__header__close} src="/icons/icon_navigation_close.svg" alt="test" />
        </div>
        <div className={mainBackground}>
            <ConnectForm isActive={actives.connectForm} setFormsActive={setFormsActive}/>
            <ForgetForm isActive={actives.forgetForm} setFormsActive={setFormsActive}/>
            <CreateForm isActive={actives.createForm} setFormsActive={setFormsActive}/>
        </div>
    </section>
    
  )
}
