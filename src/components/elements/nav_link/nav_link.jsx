import React from 'react'
import Link from 'next/link'
import styles from './nav_link.module.scss'

export default function nav_link({children, link , name}) {
  if(children){
      return (
        <li className={styles.nav}>
            <div className={styles.nav__head}>{name} <img src="/icons/icon_arrow_down.svg" alt="&#8595;" /></div>
            <ul className={styles.nav__content}>
                {children}
            </ul>
        </li>
      )
  }else {
        return (
    <Link href={link}><li className={styles.nav__nosub}>{name}</li></Link>
  )
  }

}
