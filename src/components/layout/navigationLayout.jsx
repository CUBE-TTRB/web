import Head from 'next/head'
import Header from '../elements/header/header'
import Footer from '../elements/footer/footer'
import MenuSideBar from '../elements/menuSideBar/menuSideBar'
import AccountSideBar from '../elements/accountSideBar/accountSideBar'
import { AppContext } from '../../context/state';
import { useContext,useState } from "react"
import Cookies from 'js-cookie'

export default function navigationLayout({children, useAuth}) {

  //const { isAuthenticated, user, login, loading, logout, type, AUTHTOKEN} = useAuth();
  const token = Cookies.get('token');
  console.log("aaaa",useAuth)

  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [sidebarProfil, setSidebarProfil] = useState(false);
  const handleSidebarMenu = () => {setSidebarMenu(!sidebarMenu)};
  const handleSidebarProfil = () => {setSidebarProfil(!sidebarProfil)};


  return (
    <>
    <Header 
      handleSidebarMenu={handleSidebarMenu}
      handleSidebarProfil={handleSidebarProfil}
    />
    <MenuSideBar 
      handleSidebarMenu={handleSidebarMenu} 
      active={sidebarMenu}
    /> 
    {token ? (
    <AccountSideBar 
      handleSidebarProfil={handleSidebarProfil} 
      active={sidebarProfil}
    /> 
    ):""}
    
    <main>{children}</main>
    </>
    
  )
}
