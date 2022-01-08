let host = 'http://192.168.1.10:3000';
import axios from 'axios';

let api = axios.create({
    baseURL: host + '/', 
})

export {
    api
}