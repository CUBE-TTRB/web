import Axios from "axios";
import AppService from './app.service'

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

function login(user , pwd){
    Axios.post(AppService.URL + "sessions", { "email": user, "password": pwd })
    .then(async (res) => {
        console.log(res)

      if (res.data.token) {
        window.localStorage.setItem(AppService.APP_NAME+'_token', res.data.token);
        window.localStorage.setItem(AppService.APP_NAME+'_user', "");
        window.location.href = "/";
        AppService.setToken(res.data.token)
      }
      else {
        alert("Email ou Mot de passe invalide");
      }
    
    })
    .catch((err) => {
      console.log(err);
      alert("Erreur : Email ou Mot de passe invalide");

    });
/*
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('token', JSON.stringify(token));
*/
}

function logout(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');

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

  });
}

function forgetPwd(){

}

const AuthService = {isWrongPath , login , logout , register}

export default AuthService;