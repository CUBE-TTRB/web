import React from 'react'
import styles from './menuSideBar.module.scss'
import Nav_link from '../nav_link/nav_link'
import Subnav_link from '../subnav_link/subnav_link'

export default function menuSideBar() {
  return (
    <nav className={styles.sideBar}>
        <div className={styles.header}>
        <img className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
        <img className={styles.header__logo} src="/icons/logo_white.svg" alt="" />
        </div>
        <div className={styles.navigation}>
          <ul>
            <Nav_link name="Accueil" link="/"/>
            <Nav_link name="test">
              <Subnav_link name="bite" link="/"/>
              <Subnav_link name="chat" link="/"/>
              <Subnav_link name="couille" link="/"/>
            </Nav_link>
          </ul>  
        </div>
    </nav>
    
  )
}
