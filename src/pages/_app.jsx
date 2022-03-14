// import '../styles/globals.css'
import '../styles/app.scss'
import { useContext, useEffect } from 'react';
import { ThemeProvider } from 'next-themes'
import { AppWrapper } from '../context/state';



function MyApp({ Component, pageProps }) {
  return(
    
    <AppWrapper>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
    </AppWrapper>

  )
}

export default MyApp
