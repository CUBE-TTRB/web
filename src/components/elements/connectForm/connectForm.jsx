import styles from './connectForm.module.scss'
import AuthService from '../../../service/auth.service';
import { useAuth } from '../../../context/auth';
import { useRouter } from 'next/router';


export default function connectForm({isActive, setFormsActive}) {
  const { isAuthenticated, user, login, loading, logout} = useAuth();
  console.log(useAuth())
  const router = useRouter()

  async function handleSubmit(element) {
    element.preventDefault();
    let thisForm = element.target;
    console.log(thisForm)
    console.log( login)
    
    let redirect = await login(thisForm.email.value,thisForm.password.value)
    redirect ? router.push("/") : alert('Identifiant ou mot de passe incorrect')
    //AuthService.login(thisForm.email.value,thisForm.password.value)
    


    // const {data, error} = userConnect("/?results=6")

    // if(error){console.log(error)};
    // if(data){console.log(data)};

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
