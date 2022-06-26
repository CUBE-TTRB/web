import React from 'react'
import styles from './menuSideBar.module.scss'
import Nav_link from '../nav_link/nav_link'
import Subnav_link from '../subnav_link/subnav_link'
import Link from 'next/link'
import { useState } from 'react'

export default function menuSideBar({handleSidebarMenu , active}) {


  
  return (
    <nav className={[styles.sideBar, (active?styles.sideBar__active:styles.sideBar__unactive)].join(" ")}>
        <div className={styles.header}>
        <img onClick={handleSidebarMenu} 
             className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
        <Link href="/"><img className={styles.header__logo} src="/icons/logo_white.svg" alt="" /></Link>
        </div>
        <div className={styles.navigation}>
          <ul>
            <Nav_link name="Accueil" link="/" event={handleSidebarMenu} />
            <Nav_link name="Ressources" >
              <Subnav_link name="Articles" link="/search/0" event={handleSidebarMenu}/>
              <Subnav_link name="Vidéos" link="/search/0" event={handleSidebarMenu}/>
              <Subnav_link name="Cours" link="/search/0" event={handleSidebarMenu}/>
              <Subnav_link name="Exercice / atelier" link="/search/1" event={handleSidebarMenu}/>
              <Subnav_link name="Fiche de lecture" link="/search/6" event={handleSidebarMenu}/>
              <Subnav_link name="Jeu en ligne" link="/search/20" event={handleSidebarMenu}/>
              <Subnav_link name="Activité / jeu" link="/search/20" event={handleSidebarMenu}/>
            </Nav_link>
          </ul>  
        </div>
    </nav>
    
  )
}
