import styles from './userProfile.module.scss'
import Image from 'next/image'

export default function userProfile({user}) {
    
  return (
    <div className={styles.page}>
        <div className={["userCard",styles.user].join(" ")}>
            <div className={styles.user__background}>
                <Image         
                src={user.bakckgroundImage ?? "/images/defaultImage.png"}
                alt="Picture of the author"
                width={300}
                height={100}
                /> 
            </div>
            <div className={styles.user__profile}>
                <div className={styles.user__profile___image}>
                <Image         
                src={user.profilePicture ?? "/images/defaultBackgroundImage.jpeg"}
                alt="Picture of the author"
                width={100}
                height={100}
                /> 
                </div>
            </div>
            <span className={styles.user__name}>
                {user.name} {user.lastName}
            </span>
            <p className={styles.user__description}>Aucune descritpion
            </p>
        </div>
        <form className={["card",styles.cardInfo].join(" ")}>
            <div className={styles.col}>
                <div className={styles.email}>
                    <label htmlFor="email">Email :</label>
                    <input defaultValue={user.email} placeholder='Email' id="email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className={styles.name}>
                    <label htmlFor="name">Nom :</label>
                    <input defaultValue={user.name} placeholder='Nom' id="name" name="name" type="text" required />
                </div>
                <div className={styles.firstName}>
                    <label htmlFor="firstName">Prénom :</label>
                    <input defaultValue={user.lastName} placeholder='Prenom' id="firstName" name="firstName" type="text" required />
                </div>
            </div>
            <div className={styles.col}>
                <div className={styles.age}>
                    <label htmlFor="age">Date de naissance :</label>
                    <input defaultValue={(user.bornedAt.split('T'))[0]} placeholder='Prenom' id="age" name="age" type="date" required />
                </div>
                <div className={styles.description}>
                    <label htmlFor="firstName">Description :</label>
                    <input defaultValue={"Aucune descritpion"} placeholder='Prenom' id="firstName" name="firstName" type="text" required />
                </div>
                <label htmlFor="submit"> </label>
                <button type="submit">Enregistrer</button>
            </div>


        </form>
        <div className={["card",styles.cardPwd].join(" ")}>
            <Image         
                src="/icons/lock.svg"
                alt="Picture of the author"
                width={50}
                height={50}
            /> 
            <span>Mot de passe</span>
            <p>
                Si vous voulez changer votre mot de passe cliquez ici
            </p>
            <button>Changer</button>
        </div>


        <div className={["card",styles.cardStats].join(" ")}>
            <span>Statistiques </span>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <div className={styles.stat__image}>
                        <Image         
                        src="/icons/resource.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        />
                    </div>
                    <span className={styles.stat__number}>
                        0
                    </span>
                    <span className={styles.stat__lore}>
                        Nombre de <br /> ressources
                    </span>
                </div>

                <div className={styles.stat}>
                    <div className={styles.stat__image}>
                        <Image         
                        src="/icons/view.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        />
                    </div>
                    <span className={styles.stat__number}>
                        0
                    </span>
                    <span className={styles.stat__lore}>
                        Vues sur <br /> ressources
                    </span>
                </div>

                <div className={styles.stat}>
                    <div className={styles.stat__image}>
                        <Image         
                        src="/icons/heartfilled.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        />
                    </div>
                    <span className={styles.stat__number}>
                        0
                    </span>
                    <span className={styles.stat__lore}>
                        Nombre de <br /> favoris
                    </span>
                </div>

                <div className={styles.stat}>
                    <div className={styles.stat__image}>
                        <Image         
                        src="/icons/commentfilled.svg"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                        />
                    </div>
                    <span className={styles.stat__number}>
                        0
                    </span>
                    <span className={styles.stat__lore}>
                        Nombre de <br /> commentaires
                    </span>
                </div>

                

            </div>
        </div>



        <div className={["card",styles.cardSuccess].join(" ")}>
            <div className={styles.header}>
                <span>Accomplissement</span>
                <Image         
                src="/icons/success.svg"
                alt="Picture of the author"
                width={35}
                height={35}
            /> 
            </div>
            <ul>
                <li> 
                <p>Pionnier </p> 
                <Image         
                src="/icons/achive1.svg"
                alt="Picture of the author"
                width={30}
                height={30}
                />
                </li>

                <li><p>Pionnier </p> <Image src="/icons/achive1.svg" alt="Picture of the author" width={30} height={30} /></li>

                
            </ul>
        </div>

    </div>
  )
}
