import Axios from "axios";
import AppService from './app.service'


async function getRessource(withUser){
    try{
        console.log("brefore")
        let toReturn = (await Axios.get(AppService.URL + "resources" )).data.result;
        console.log("toReturn",toReturn)
        console.log("AFTER")
        return toReturn
    }catch{ return []}
}

async function getSpecificRessource(id){
    try{
        let toReturn = (await Axios.get(AppService.URL + "resources/" + id)).data.result;

        return toReturn
    }catch{ return false}
}


async function createRessource(type, visibility, title, body, categoryId, token){
    try{
        let toReturn = (await Axios.post(AppService.URL + "resources",{
             "resource": { 
                 "type":type, 
                 "visibility":(visibility)?"PUBLIC":"PRIVATE", 
                 "title":title, 
                 "body":body, 
                 "categoryId":1 }, 
             "token" : token
        })).data.result;

        return toReturn
    }catch{ return false}
}

async function commentRessource(id, text, token){
    try{
        let toReturn = (await Axios.post(AppService.URL + "comments",{ 
            "comment": { 
                "resourceId":id, 
                "text" :text
            }, 
            "token" : token 
        }
        )).data.result;

        return toReturn
    }catch{ return false}
}

const ResourceService = {getRessource,getSpecificRessource,createRessource,commentRessource}

export default ResourceService;