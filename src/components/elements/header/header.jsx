import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'



export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.menu}>    
        
        
      </div>
      <div className={styles.search}>
        <label>
        <img className={styles.search__icon} src="/icons/icon_search.svg" alt="" />
        <input type="search" id="site-search" name="search" className={styles.search__bar}/>
        </label>
      </div>
      <div className={styles.account}>    
        <img className={styles.account__icon} src="/icons/icon_account.svg" alt="" />
      </div>
    </header>
  )
}
