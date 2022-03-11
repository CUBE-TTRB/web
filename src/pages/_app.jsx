// import '../styles/globals.css'
import '../styles/app.scss'
import { useContext, useEffect } from 'react';
import { ThemeProvider } from 'next-themes'



function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
