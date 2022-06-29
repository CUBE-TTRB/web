import Head from 'next/head'
import Image from 'next/image'
import UserProfile from '../components/elements/userProfile/userProfile'
import Layout from '../components/layout/layout'
import NavigationLayout from '../components/layout/navigationLayout'
import { AppContext } from '../context/state';
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'


export default function Profil() {
  const authContext = useContext(AppContext);
  const router = useRouter();
  useEffect(() => {
    if(!(authContext.state.auth))router.push("/");
  }, [])
  if(authContext.state.auth){
    return (<UserProfile />)
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