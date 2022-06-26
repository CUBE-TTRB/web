import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'


export default function header({handleSidebarMenu}) {
  
  return (
    <header className={styles.header}>
      <div className={styles.menu}>    
      <img onClick={handleSidebarMenu} className={styles.menu__icon} src="/icons/icon_navigation_menu.svg" alt="" />
      <Link href="/"><img className={styles.menu__logo} src="/icons/logo_green.svg" alt="" /></Link>
      </div>
      <div className={styles.search}>
        <label>
        <img className={styles.search__icon} src="/icons/icon_search.svg" alt="" />
        <input type="search" id="site-search" name="search" className={styles.search__bar}/>
        </label>
      </div>
      <div className={styles.account}>    
      <Link href="/auth"><img className={styles.account__icon} src="/icons/icon_account.svg" alt="" /></Link>
      </div>
    </header>
  )
}
