import { createContext, useContext, useEffect, useState } from 'react';
import AppService from '../service/app.service';

export const AppContext = createContext();

export function AppWrapper({ childre }) {

  //const [isauth, setIsauth] = useState(AppService.TOKEN);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
        const token = Cookies.get('token')
        if (token) {
            console.log("Got a token in the cookies, let's see if it is valid")
            api.defaults.headers.Authorization = `Bearer ${token}`
            const { data: user } = await api.get('users/me')
            if (user) setUser(user);
        }
        setLoading(false)
    }
    loadUserFromCookies()
  }, [])
  console.log("myAUth",myAuth)

  const contextValues = {
    state: {
      auth: auth,
      type: {
        "ACTIVITY" : { name:"Activity",id:7},
        "ARTICLE": { name:"Article",id:1},
        "COURSE": { name:"Course",id:2},
        "EXERCISE": { name:"Exercise",id:4},
        "BOOKLET": { name:"Booklet",id:5},
        "VIDEOGAME": { name:"Game",id:6},
        "VIDEO": { name:"Video",id:3}
      }
    }
  }

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
}
