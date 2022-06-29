import Image from 'next/image'
import React from 'react'
import styles from './card.module.scss'
import Link from 'next/link'
import UserService from '../../../service/user.service'
import { useState, useEffect } from 'react'


export default function card({link,title,icon,image,description,user,like,comment,tags}) {
  const [cardUser, setcardUser] = useState("/images/defaultImage.png");

  async() => {
    let thisUser = await UserService.getUser(user);
    console.log(thisUser)
    setcardUser(thisUser.profilePicture && cardUser);
  
  }
  
  let thisCard = (
    <article className={[ "card" , styles.card ].join(" ")} >
      <div className={styles.card__header}> 
        <a title={title}>{title}</a> 
        <Image         
          src={"/icons/"+icon.name+".svg"}
          alt={"Picture of "+ icon}
          width={30}
          height={30}
        /> 
      </div>
      <div className={styles.card__image}>
        <Image         
            src={(image)? image: "/images/catalog-default-img.png"}
            alt="Picture of the author"
            width={1920}
            height={1080}
            //layout="responsive"
            //placeholder="blur"
            //https://github.com/vercel/next.js/discussions/26168#discussioncomment-877038
          />
      </div>
      <div className={styles.card__description}>
        <p>{description}</p>
      </div>
      <div className={styles.card__infos}>
        <div className={styles.user}>
          <Image         
              src={cardUser}
              alt="?"
              width={50}
              height={50}
              //layout="responsive"
              //placeholder="blur"
              //https://github.com/vercel/next.js/discussions/26168#discussioncomment-877038
            />
        </div>
        <div className={styles.stats}>
          <div className={styles.heart}>
            <span className={styles.heart__image}>
              <Image         
              src="/icons/heart.svg"
              alt="♡"
              width={25}
              height={25}
              />
            </span>
            <span>0</span>
          </div>
          <div className={styles.comments}>
            <span className={styles.comments__image}>
              <Image         
                src="/icons/comment.svg"
                alt="☁"
                width={25}
                height={25}
              />
            </span>

            <span>0</span>
          </div>
        </div>
      </div>
      <div className={styles.card__tags}>
        {
          tags.map(el => {
            return (
            <span key={el.id} className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>{el.name}</span>
            )
          })
        }
      </div>
    </article>
  )

  if(link){
    return (
      <Link href={"/resource/"+link}>
        {thisCard}
      </Link>
    )
  }else {
    return thisCard
  }
}


