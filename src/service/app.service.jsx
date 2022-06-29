
const URL = "https://api-cube.remidurieu.dev/";
const APP_NAME = "ressources_relationnelles"
let TOKEN = false ;

const allowDisconnectedPath = [
    "/",
    "/auth",
    "/resource",
    "/search",
    "/search/:slug"
]

function parseJwt(token) {
    console.log(token)
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

function setToken(token){
    this.TOKEN = token;
}

function removeToken(){
    TOKEN = false;
}

function checkDisconnectedUserAllowsPaths(){
    let returned = false
    allowDisconnectedPath.map((el) => (window.location.pathname == el)?returned = true:"")
    return returned
}

const AppService = {URL , APP_NAME , setToken , TOKEN , removeToken, parseJwt}
export default AppService;