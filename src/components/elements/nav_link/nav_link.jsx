import React from 'react'
import Link from 'next/link'
import styles from './nav_link.module.scss'

export default function nav_link({children, link , name}) {
  if(children){
      return (
        <li className={styles.nav}>{name} <img src="/icons/icon_arrow_down.svg" alt="&#8595;" /></li>
      )
  }else {
        return (
    <Link href={link}><li>{name}</li></Link>
  )
  }

}
