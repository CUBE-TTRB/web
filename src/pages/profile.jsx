import Head from 'next/head'
import Image from 'next/image'
import UserProfile from '../components/elements/userProfile/userProfile'
import Layout from '../components/layout/layout'
import NavigationLayout from '../components/layout/navigationLayout'
import { AppContext } from '../context/state';
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/auth'

export default function Profil() {
  const { isAuthenticated, user, login, loading, logout, type, AUTHTOKEN} = useAuth();

  const router = useRouter();
  useEffect(() => {
    if(!(isAuthenticated))router.push("/");
  }, [])
  if(isAuthenticated){
    return (<UserProfile user={user}/>)
  }else {
    return null
  }


}


Profil.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>

    </Layout>
  )
}