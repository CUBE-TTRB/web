import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import UserService from '../service/user.service';
import AppService from '../service/app.service';
import AuthService from '../service/auth.service';


const AuthContext = createContext({});

const type = {
    "ACTIVITY" : { name:"Activity",id:7},
    "ARTICLE": { name:"Article",id:1},
    "COURSE": { name:"Course",id:2},
    "EXERCISE": { name:"Exercise",id:4},
    "BOOKLET": { name:"Booklet",id:5},
    "VIDEOGAME": { name:"Game",id:6},
    "VIDEO": { name:"Video",id:3}
  }

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                let userId = AppService.parseJwt(token).id
                const _data_user = await UserService.getUser(userId)
                if (_data_user) setUser(_data_user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (email, password) => {
        const _data_token = await AuthService.login(email,password)
        if (_data_token) {
            console.log("Got token")
            console.log(_data_token)
            Cookies.set('token', _data_token, { expires: 60 })
            const userId = AppService.parseJwt(_data_token).id
            const _data_user = await UserService.getUser(userId)
            if (_data_user) {setUser(_data_user);return true};
            return false;
        }
    }

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        return true;
    }








    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout, type }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)


export const ProtectRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    if (isLoading || (!isAuthenticated && AppService.checkDisconnectedUserAllowsPaths)){
      return null; 
    }
    return children;
  };