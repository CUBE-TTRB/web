// import '../styles/globals.css'
import '../styles/app.scss'

import { useContext, useEffect } from 'react';
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '../context/auth';
import { ProtectRoute } from '../context/auth';
// import { AppWrapper } from '../context/state';


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(    
    // <AppWrapper>
    <AuthProvider>
    <ThemeProvider>
    <ProtectRoute>
      <Component {...pageProps} />
      </ProtectRoute>
    </ThemeProvider>
    </AuthProvider>
    // </AppWrapper> 
  )
}

export default MyApp
