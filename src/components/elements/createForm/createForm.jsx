import styles from './createForm.module.scss'
import AuthService from '../../../service/auth.service';

export default function createForm({isActive, setFormsActive}) {
  let formClass = `${styles.form} ${styles.isNotActive}`;
  if(isActive){
    formClass = `${styles.form} ${styles.isActive}`;
  }
  function handleSubmit(element) {
    element.preventDefault();
    let thisForm = element.target;
    AuthService.register(thisForm.name.value,thisForm.email.value,thisForm.lastname.value,thisForm.age.value,thisForm.password.value)


    // const {data, error} = userConnect("/?results=6")

    // if(error){console.log(error)};
    // if(data){console.log(data)};

  };
  return (
    <>
        {/* <form onSubmit={registerUser}> */}
        <form onSubmit={handleSubmit} className={formClass}>
            <h2 className='form'>Créer un compte</h2>
            
            <input placeholder='Nom' id="name" name="name" type="text" autoComplete="text" required />
            <input placeholder='Prénom' id="lastname" name="lastname" type="text" autoComplete="text" required />
            <input placeholder='Age' id="age" name="age" type="date" autoComplete="text" required />
            <input placeholder='Adresse email' id="email" name="email" type="email" autoComplete="email" required />
            <input placeholder='Mot de passe' id="password" name="password" type="password" autoComplete="password" required />
            <button type="submit">Créer</button>


            <img onClick={()=> setFormsActive("createForm")} className={styles.icon} src="/icons/icon_openUp_white.svg" alt="test" />
            
            
        </form>
        
    </>
  )
}
