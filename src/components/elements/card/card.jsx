import Image from 'next/image'
import React from 'react'
import styles from './card.module.scss'

export default function card({link,title,icon,image,description,user,like,comment,tags}) {
  console.log(user)
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum qui blanditiis quasi animi, aliquam cumque itaque ut vero nulla magni officiis laboriosam amet vel expedita, eligendi accusantium atque ea consectetur?
          Cumque reiciendis id cupiditate distinctio omnis aut dolor sint sed maiores dicta tempora voluptatem rerum eveniet, placeat dignissimos unde laudantium enim dolorum. Deleniti temporibus illo ad, blanditiis sint reprehenderit voluptatem?
        </p>
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
      <span className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>Famille</span>
      <span className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>Amis</span>
      <span className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>Conjoints</span>
      <span className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>Professionnelle</span>
      <span className={styles.tag}> <Image src="/icons/tags.svg" alt="♟" width={15} height={15}/>Inconnus</span>
      </div>
    </article>
  )
}
