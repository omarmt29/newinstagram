
import axios from 'axios'
import { supabase } from '../servidor/Client';



//lista de usuarios
export const userlist = async () => {

    const results = await axios.get('https://randomuser.me/api/?results=20');
    return results.data.results

}

//lista de posts
export const posts = async () => {

    const {data} = await supabase.from('posts').select()
    return data

}

//Hay session activa?
export const getsession = async () => {

    const { data, error } = await supabase.auth.getSession()
    return data + error

}

