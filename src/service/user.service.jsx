import Axios from "axios";
import AppService from './app.service'

let USER = null;


function setUser(user){
    USER = user;
}

async function getUser(id){
    try{
        return (await Axios.get(AppService.URL + "users/"+ id )).data.result
    }catch{ return false}
}

async function getUsers(){
    try{
        return (await Axios.get(AppService.URL + "users/" )).data.result
    }catch{ return false}
}


const UserService = {getUser, setUser, USER, getUsers}

export default UserService;