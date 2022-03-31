import React from 'react'
import Head from 'next/head'
import Header from '../elements/header/header'
import Footer from '../elements/footer/footer'
import MenuSideBar from '../elements/menuSideBar/menuSideBar'
import { useState } from "react"


export default function layout({children}) {

  const sideBars = {
    menuSideBar : false,
    account : false
  }

  const [actives, setActives] = useState(sideBars);


  function setSideBarActive(string){
    let temp = { ...sideBars };
    temp[string] = true;
    setActives(temp);
  };


  return (
    <div>
    <Header />
    <MenuSideBar isActive={actives.menuSideBar}/> 
    <main>{children}</main>
    <Footer />
    </div>
    
  )
}
