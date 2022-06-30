import Image from "next/image";
import styles from "./comment.module.scss"

export default function comment({props, users}) {
    users = users.find(el => el.id == props.userId)
  return (
    <div className={styles.page}>
        <div className={styles.user}>
                <div className={styles.user__image}>
                    <Image         
                    src={users.profilePicture || "/images/defaultImage.png"}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    /> 
                    <span className={styles.user__image___id}>{users.name}{users.lastName}</span>
                </div>
                
                <div className={styles.user__comment}>
                    <p>{props.text}</p>
                </div>
        </div>
        <hr />
    </div>
  )
}
