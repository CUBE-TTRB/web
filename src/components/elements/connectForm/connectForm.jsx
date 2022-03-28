import styles from './connectForm.module.scss'


export default function connectForm() {
  return (
    <>
        {/* <form onSubmit={registerUser}> */}
        <form>
            <h2 className='form'>Connectez-vous</h2>
            <input placeholder='Adresse email' id="email" name="email" type="email" autoComplete="email" required />
            <input placeholder='Mot de passe' id="password" name="password" type="password" autoComplete="password" required />
            <button type="submit">Valider</button>
            <a className={styles.forgotPwd}>
              Mot de passe oublié ? <br />
               <span>Cliquez ici !</span> 
            </a>
        </form>
        
    </>
  )
}
