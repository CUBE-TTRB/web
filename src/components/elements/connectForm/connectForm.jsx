import styles from './connectForm.module.scss'


export default function connectForm({isActive, setFormsActive}) {
  let formClass = `${styles.form} ${styles.isNotActive}`;
  if(isActive){
    formClass = `${styles.form} ${styles.isActive}`;
  }
  return (
    <>
        {/* <form onSubmit={registerUser}> */}
        <form className={formClass}>
            <h2 className='form'>Connectez-vous</h2>


            <input placeholder='Adresse email' id="email" name="email" type="email" autoComplete="email" required />
            <input placeholder='Mot de passe' id="password" name="password" type="password" autoComplete="password" required />
            <button type="submit">Valider</button>
            <a onClick={()=> setFormsActive("forgetForm")} className={styles.forgotPwd}>
              Mot de passe oublié ? <br />
               <span>Cliquez ici !</span> 
            </a>

            <img onClick={()=> setFormsActive("connectForm")} className={styles.icon} src="/icons/icon_openDown.svg" alt="test" />

        </form>
        
    </>
  )
}
