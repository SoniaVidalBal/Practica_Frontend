import axios, {AxiosHeaders} from "axios";

const soniapopApi= axios.create({
    baseURL:'https://api.escuelajs.co/api/v1/'
});

soniapopApi.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token') ?? '';
    if (token) {
        (config.headers as AxiosHeaders).set("Authorisation", `Bearer ${token}`) //JWT
    }
    return config;
})

export default soniapopApi;