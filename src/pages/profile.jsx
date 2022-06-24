import Head from 'next/head'
import Image from 'next/image'
import UserProfile from '../components/elements/userProfile/userProfile'
import Layout from '../components/layout/layout'
import NavigationLayout from '../components/layout/navigationLayout'

export default function Profil() {
  return (
    <UserProfile />
  )
}


Profil.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>

    </Layout>
  )
}