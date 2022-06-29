import Axios from "axios";
import AppService from './app.service'


function getRessource(id, userId, visibility, state, type, categoryId, title, body, date, location){
    Axios.post(AppService.URL + "ressource", {
        "id": id, "userId": userId, "visibility": visibility, "state": state, 
        "type": type, "categoryId": categoryId, "title": title, "body": body, 
        "date": date, "location": location,
    })
    .then(async (res) => {
        console.log(res)

    
    })
    .catch((err) => {
      console.log(err);
      alert("Erreur : Aucune ressource");

    });
/*
    window.localStorage.setItem('user', JSON.stringify(user));
    window.localStorage.setItem('token', JSON.stringify(token));
*/
}


const ResourceService = {getRessource}

export default ResourceService;