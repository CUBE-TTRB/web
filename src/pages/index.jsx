import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/layout'
import { useTheme } from 'next-themes'

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </Layout>
    </div>
  )
}
