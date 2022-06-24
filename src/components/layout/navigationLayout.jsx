import Head from 'next/head'
import Header from '../elements/header/header'
import Footer from '../elements/footer/footer'
import MenuSideBar from '../elements/menuSideBar/menuSideBar'
import { useState } from "react"


export default function navigationLayout({children}) {


  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [sidebarProfil, setSidebarProfil] = useState(false);
  const handleSidebarMenu = () => {setSidebarMenu(!sidebarMenu)};
  const handleSidebarProfil = () => {setSidebarMenu(!sidebarProfil)};


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
    <main>{children}</main>
    <Footer />
    </>
    
  )
}
