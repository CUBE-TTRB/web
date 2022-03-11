import React from 'react'
import Head from 'next/head'
import Header from '../elements/header/header'
import Footer from '../elements/footer/footer'
import MenuSideBar from '../elements/menuSideBar/menuSideBar'

export default function layout({children}) {
  return (
    <div>
    <Header />
    <MenuSideBar /> 
    <main>{children}</main>
    <Footer />
    </div>
    
  )
}
