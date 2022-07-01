import styles from './accountSideBar.module.scss'
import Link from 'next/link'
import Nav_link from '../nav_link/nav_link'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import UserService from '../../../service/user.service'


export default function accountSideBar({handleSidebarProfil , active}) {

  const [user, setUser] = useState({
    profilePicture : "/icons/logo_white.svg"
  });

  useEffect(() => {
    async function loadUserFromCookies() {
      let thisUser = await UserService.getUser(Cookies.get('user'));
      console.log("HEHO",thisUser)
      setUser(thisUser ?? user);
    
    }
    loadUserFromCookies();
  }, [])
  


  return (
    <nav className={[styles.sideBar, (active?styles.sideBar__active:styles.sideBar__unactive)].join(" ")}>
    <div className={styles.header}>
    <Link href="/profile"><img className={styles.header__logo} src={user.profilePicture} alt="" /></Link>
    <img onClick={handleSidebarProfil} 
         className={styles.header__close} src="/icons/icon_navigation_close_white.svg" alt="" />
    
    </div>
    <div className={styles.navigation}>
      <ul>
        <Nav_link name="Profil" link="/profile" event={handleSidebarProfil} />
      </ul>  
    </div>
</nav>
  )
}
