import styles from "./resource.module.scss"
import { useState,useEffect } from "react";
import Image from "next/image";
import UserService from "../../../service/user.service";
import Comment from "../comment/comment";

import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'

export default function resource({post,user,commentUser}) {

  const [cardUser, setcardUser] = useState(user);


console.log(post.comment)
  let cfg = {};

  let converter = new QuillDeltaToHtmlConverter(post.body[0], cfg);

  let resourceHtml = converter.convert(); 


  return (
    <div className={styles.page}>
      <article className={[ "card" , styles.resource ].join(" ")}>
        <h2 className={styles.resource__title}>{post.title}</h2>
        <div className={styles.resource__body} dangerouslySetInnerHTML={{ __html: resourceHtml }}></div>
      </article>
      <div className={["userCard",styles.user].join(" ")}>
            <div className={styles.user__background}>
                <Image         
                src={cardUser.bakckgroundImage || "/images/defaultBackgroundImage.jpeg"}
                alt="Picture of the author"
                width={300}
                height={100}
                /> 
            </div>
            <div className={styles.user__profile}>
                <div className={styles.user__profile___image}>
                <Image         
                src={cardUser.profilePicture || "/images/defaultImage.png"}
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
              {cardUser.description || "Aucune information sur cet utilisateur"}
            </p>
      </div>
      <div className={[ "card" , styles.comment ].join(" ")}>
        <ul className={styles.comment__list}>
          {
            (post.comments)?.map(el => (
              <li><Comment props={el} users={commentUser}/></li>
            ))
          }
        </ul>
        <div className={styles.comment__input}>
          <label htmlFor="">Commenter :</label>
          <input type="text" />
          <button>Commenter</button>
        </div>
      </div>
    </div>
  )
}


