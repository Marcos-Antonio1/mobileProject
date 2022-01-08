let host = 'http://192.168.43.92:3000';
import axios from 'axios';

let api = axios.create({
    baseURL: host + '/', 
})

export {
    api
}