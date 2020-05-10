import Axios from "axios"

import { API_URL } from '../../variables/constants'

class CovidDataService{
    retreiveSummary(name){
        return Axios.get(`${API_URL}`);
         //console.log('executed Service')
     }



     


}


export default new CovidDataService()