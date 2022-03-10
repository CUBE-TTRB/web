// import '../styles/globals.css'
import '../styles/app.scss'
import ThemeContext, { ThemeContextProvider } from '../context/themeContext/ThemeContext'
import { useContext } from 'react';


const WrappedApp = ({ Component, pageProps }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`${isDark ? "theme--dark" : "theme--light"}`}><Component {...pageProps} /></div>
  );
};


function MyApp({ Component, pageProps }) {
  return(
    <ThemeContextProvider>
      <WrappedApp {...pageProps} />
    </ThemeContextProvider>
  )
}

export default MyApp
