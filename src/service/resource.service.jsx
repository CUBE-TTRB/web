import Axios from "axios";
import AppService from './app.service'


async function getRessource(withUser){
    try{
        let toReturn = (await Axios.get(AppService.URL + "resources" )).data.result;

        return toReturn
    }catch{ return []}
}

async function getSpecificRessource(id){
    try{
        let toReturn = (await Axios.get(AppService.URL + "resources/" + id)).data.result;

        return toReturn
    }catch{ return false}
}

const ResourceService = {getRessource,getSpecificRessource}

export default ResourceService;