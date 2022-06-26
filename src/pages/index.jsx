import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import NavigationLayout from '../components/layout/navigationLayout'
import HomePage from '../components/elements/homePage/homePage'
import Footer from '../components/elements/footer/footer'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>


        <HomePage />
      {/* <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button> */}


    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NavigationLayout>{page}</NavigationLayout>
      {/* <Footer /> */}

    </Layout>
  )
}