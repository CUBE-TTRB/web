import Axios from "axios";
import AppService from './app.service'

let USER = null;


function setUser(user){
    USER = user;
}

async function getUser(id){
    try{
        return (await Axios.get(AppService.URL + "users/"+ id )).data.result
    }catch{ return []}
}


const UserService = {getUser, setUser, USER}

export default UserService;