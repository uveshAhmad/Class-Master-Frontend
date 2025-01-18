import axios from 'axios';


const instance = axios.create({
    baseURL: "https://class-master-back-end.vercel.app/api"
})

export default instance