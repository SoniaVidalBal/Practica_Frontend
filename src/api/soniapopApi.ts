import axios from "axios";

const soniapopApi= axios.create({
    baseURL:'https://api.escuelajs.co/api/v1/'
});

//soniapopApi.interceptors.request.use((config)=>{
//    config.headers?.set('Authorization')
//})

export default soniapopApi;