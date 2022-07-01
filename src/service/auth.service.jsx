import Axios from "axios";
import AppService from './app.service'
import Cookies from 'js-cookie'

let isAuth = false;

function isWrongPath(token,path,truePath, falsePath) {

    if (window.location.pathname === path && token) {
      Router.push(truePath);
    }
    if (!token) {
      Router.push(falsePath);
    }
  }
  
function isInStock(){
    window.localStorage.getItem(AppService.APP_NAME+'_token');
}

async function login(user , pwd){
  try{
    return (await Axios.post(AppService.URL + "sessions", { "email": user, "password": pwd } )).data.token
}catch{ return false}
    Axios.post(AppService.URL + "sessions", { "email": user, "password": pwd })
    .then( (res) => {
        console.log(res)

      if (res.data.token) {/*
        window.localStorage.setItem(AppService.APP_NAME+'_token', res.data.token);
        window.localStorage.setItem(AppService.APP_NAME+'_user', "");
        window.location.href = "/";
        AppService.setToken((res.data.token)) ;*/
        return res.data.token
      }
      else {
        // alert("Email ou Mot de passe invalide");
        return false
      }
    
    })
    .catch((err) => {
      console.log(err);
      // alert("Erreur : Email ou Mot de passe invalide");
      return false;
    });
/*
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('token', JSON.stringify(token));
*/
}


function register(name,email,lastName,bornedAt,pwd){
  Axios.post(AppService.URL + "users", { 
    "user": { 
      "name" : name, 
      "email":email, 
      "lastName": lastName,
      "bornedAt":bornedAt
    }, 
    "auth": { 
      "password": pwd
    } 
  }).then(async (res) => {
      console.log(res)
      return true;
/*
    if (res.data.token) {
      window.localStorage.setItem(AppService.APP_NAME+'_token', res.data.token);
      window.localStorage.setItem(AppService.APP_NAME+'_user', "");
      window.location.href = "/";
      AppService.setToken(res.data.token)
    }
    else {
      alert("Email ou Mot de passe invalide");
    }*/
  
  })
  .catch((err) => {
    console.log(err);
    alert("Erreur : Email ou Mot de passe invalide");
    return false

  });
}

function forgetPwd(){

}

const logout = () => {
  Cookies.remove('token')
  Cookies.remove('user')
  location.reload(true);
  window.location.href = "/"
  return true;
}

const AuthService = {isWrongPath , login , register, isAuth, logout}

export default AuthService;