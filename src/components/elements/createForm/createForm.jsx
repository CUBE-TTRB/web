import styles from './createForm.module.scss'


export default function createForm({isActive, setFormsActive}) {
  let formClass = `${styles.form} ${styles.isNotActive}`;
  if(isActive){
    formClass = `${styles.form} ${styles.isActive}`;
  }
  return (
    <>
        {/* <form onSubmit={registerUser}> */}
        <form className={formClass}>
            <h2 className='form'>Créer un compte</h2>
            
            <input placeholder='Nom' id="name" name="name" type="text" autoComplete="text" required />
            <input placeholder='Prénom' id="firstname" name="firstname" type="text" autoComplete="text" required />
            <input placeholder='Age' id="age" name="age" type="text" autoComplete="text" required />
            <input placeholder='Adresse email' id="email" name="email" type="email" autoComplete="email" required />
            <input placeholder='Mot de passe' id="password" name="password" type="password" autoComplete="password" required />
            <button type="submit">Créer</button>


            <img onClick={()=> setFormsActive("createForm")} className={styles.icon} src="/icons/icon_openUp_white.svg" alt="test" />
            
            
        </form>
        
    </>
  )
}
