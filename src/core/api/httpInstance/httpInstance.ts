import axios from "axios";

export function httpInstance() { 
    return axios.create({
        baseURL: 'http://localhost:3000',
    })
}