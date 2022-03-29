import styles from './connectForm.module.scss'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())



export default function connectForm({isActive, setFormsActive}) {


  function handleSubmit(element) {
    element.preventDefault();
    let thisForm = element.target;
    console.log(thisForm.password.value);

    const { data, error } = useSWR('https://api-cube.remidurieu.dev/sessions', fetcher)

    if(date){console.log(date)};
    if(error){console.log(error)};

  };


  let formClass = `${styles.form} ${styles.isNotActive}`;
  if(isActive){
    formClass = `${styles.form} ${styles.isActive}`;
  }

  return (
    <>
        {/* <form onSubmit={registerUser}> */}
        <form onSubmit={handleSubmit} className={formClass}>
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
