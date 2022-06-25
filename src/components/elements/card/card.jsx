import Image from 'next/image'
import React from 'react'
import styles from './card.module.scss'

export default function card({link,title,icon,image,description,user,like,comment,tags}) {

  return (
    <article className={[ "card" , styles.card ].join(" ")} >
      <div className={styles.card__header}> 
        <a title={title}>{title}</a> 
        <Image         
          src={"/icons/"+icon+".svg"}
          alt={"Picture of "+ icon}
          width={30}
          height={30}
        /> 
      </div>
      <div className={styles.card__image}>
        <Image         
            src={image}
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
              src={user.porfilePiture}
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
}
