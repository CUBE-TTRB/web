import React from 'react'
import Link from 'next/link'
import styles from './nav_link.module.scss'
import { useState } from 'react';

export default function nav_link({children, link , name, event}) {
  if(children){

    const [subNav, setSubNav] = useState(false);
    const handleSubNav = () => {setSubNav(!subNav)};
      return (
        <li className={styles.nav} >
            <div onClick={handleSubNav} className={styles.nav__head}>{name} <img src="/icons/icon_arrow_down.svg" alt="&#8595;" /></div>
            <ul className={[styles.nav__content, 
                            (subNav?styles.nav__content___open:styles.nav__content___close)
                            ].join(" ")}>
                {children}
            </ul>
        </li>
      )
  }else {
        return (
    <Link href={link}><li onClick={event} className={styles.nav__nosub}>{name}</li></Link>
  )
  }

}
