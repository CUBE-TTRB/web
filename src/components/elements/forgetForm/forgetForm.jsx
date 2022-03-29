import styles from './forgetForm.module.scss'


export default function forgetForm({isActive}) {
  if(isActive){
    return (
    <>
    {/* <form onSubmit={registerUser}> */}
    <form className={styles.form}>
        <h2 className='form'>Mot de passe oublié</h2>
        <input placeholder='Adresse email' id="email" name="email" type="email" autoComplete="email" required />
        <button type="submit" className='green'>Demander</button>
        
    </form>
      
  </>
    )
  }else return null
  }
  
