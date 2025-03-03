import axios from "axios";

export function httpInstance() { 
    return axios.create({
        baseURL: process.env.API_URL,
    })
}