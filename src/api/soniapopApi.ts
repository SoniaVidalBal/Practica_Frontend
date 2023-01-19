import axios from "axios";

const soniapopApi= axios.create({
    baseURL:'https://api.escuelajs.co/api/v1/'
});

export default soniapopApi;