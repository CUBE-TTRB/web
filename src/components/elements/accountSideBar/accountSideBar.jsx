import styles from './accountSideBar.module.scss'
import Link from 'next/link'
import Nav_link from '../nav_link/nav_link'
export default function accountSideBar({handleSidebarProfil , active}) {
  return (
    <nav className={[styles.sideBar, (active?styles.sideBar__active:styles.sideBar__unactive)].join(" ")}>
    <div className={styles.header}>
    <img onClick={handleSidebarProfil} 
         className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
    <Link href="/"><img className={styles.header__logo} src="/icons/logo_white.svg" alt="" /></Link>
    </div>
    <div className={styles.navigation}>
      <ul>
        <Nav_link name="Accueil" link="/" event={handleSidebarProfil} />
      </ul>  
    </div>
</nav>
  )
}
