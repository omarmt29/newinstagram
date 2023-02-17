
import axios from 'axios'

//lista de usuarios
export const userlist = async () => {

    const results = await axios.get('https://randomuser.me/api/?results=20');
    
    return results.data.results

}