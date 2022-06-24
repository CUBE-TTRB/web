import React from 'react'
import styles from './menuSideBar.module.scss'
import Nav_link from '../nav_link/nav_link'
import Subnav_link from '../subnav_link/subnav_link'
import { useState } from 'react'

export default function menuSideBar({handleSidebarMenu , active}) {


  
  return (
    <nav className={[styles.sideBar, (active?styles.sideBar__active:styles.sideBar__unactive)].join(" ")}>
        <div className={styles.header}>
        <img onClick={handleSidebarMenu} 
             className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
        <img className={styles.header__logo} src="/icons/logo_white.svg" alt="" />
        </div>
        <div className={styles.navigation}>
          <ul>
            <Nav_link name="Accueil" link="/" event={handleSidebarMenu} />
            <Nav_link name="test" >
              <Subnav_link name="0" link="/search/0" event={handleSidebarMenu}/>
              <Subnav_link name="1" link="/search/1" event={handleSidebarMenu}/>
              <Subnav_link name="6" link="/search/6" event={handleSidebarMenu}/>
              <Subnav_link name="20" link="/search/20" event={handleSidebarMenu}/>
            </Nav_link>
          </ul>  
        </div>
    </nav>
    
  )
}
