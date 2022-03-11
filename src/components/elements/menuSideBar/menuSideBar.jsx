import React from 'react'
import styles from './menuSideBar.module.scss'

export default function menuSideBar() {
  return (
    <nav className={styles.sideBar}>
        <div className={styles.header}>
        <img className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
        <img className={styles.header__logo} src="/icons/logo_white.svg" alt="" />
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
          </ul>  
        </div>
    </nav>
    
  )
}
