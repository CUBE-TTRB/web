
const URL = "https://api-cube.remidurieu.dev/";
const APP_NAME = "ressources_relationnelles"
let TOKEN = false ;




function setToken(token){
    TOKEN = token;
}

function removeToken(){
    TOKEN = false;
}

const AppService = {URL , APP_NAME , setToken , TOKEN , removeToken}
export default AppService;