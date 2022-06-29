import Head from 'next/head'
import Image from 'next/image'
import UserProfile from '../components/elements/userProfile/userProfile'
import Layout from '../components/layout/layout'
import NavigationLayout from '../components/layout/navigationLayout'
import { AppContext } from '../context/state';
import { useContext } from 'react'
import Router from 'next/router'

export default function Profil() {
  const authContext = useContext(AppContext);
  if(authContext.state.auth){
    return (
      <UserProfile />
    )
  }else {
    Router.push("/")
  }

}


Profil.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>

    </Layout>
  )
}