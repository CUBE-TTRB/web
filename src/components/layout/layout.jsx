import React from 'react'
import Head from 'next/head'
import Header from '../elements/header/header'
import Footer from '../elements/footer/footer'

export default function layout({children}) {
  return (
    <div>
    <Header />
    <main>{children}</main>
    <Footer />
    </div>
    
  )
}