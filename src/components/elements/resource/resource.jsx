import styles from "./resource.module.scss"
import { useState } from "react";
import Image from "next/image";
import UserService from "../../../service/user.service";

export default function resource({post}) {
  console.log("HAAAA")
  const [cardUser, setcardUser] = useState({
    "name": "Unknow",
    "lastName": "Person",
    "bakckgroundImage": "/images/defaultBackgroundImage.jpeg",
    "role": "USER",
    "profilePicture": "/images/defaultImage.png",
    "description" : "Aucune description ici :("
  });
  async() => {
    console.log("test")
  
  }
  async() => {
    let thisUser = await UserService.getUser(post.userId);
    console.log("test")
    console.log(thisUser)
    setcardUser(thisUser);
  
  }

  return (
    <div className={styles.page}>
      <article className={[ "card" , styles.resource ].join(" ")}>
        <h2 className={styles.resource__title}>{post.title}</h2>
        <div className={styles.resource__body}></div>
      </article>
      <div className={["userCard",styles.user].join(" ")}>
            <div className={styles.user__background}>
                <Image         
                src={cardUser.bakckgroundImage}
                alt="Picture of the author"
                width={300}
                height={100}
                /> 
            </div>
            <div className={styles.user__profile}>
                <div className={styles.user__profile___image}>
                <Image         
                src={cardUser.profilePicture}
                alt="Picture of the author"
                width={100}
                height={100}
                /> 
                </div>
            </div>
            <span className={styles.user__name}>
                {cardUser.name} {cardUser.lastName}
            </span>
            <p className={styles.user__description}>
              {cardUser.description}
            </p>
        </div>
    </div>
  )
}


