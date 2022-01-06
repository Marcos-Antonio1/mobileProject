import { api } from '../api';

const registerBuyer = async ( data ) => {
    try {
        let response = await api.post('registerBuyer', data);
    } catch (err) {
        throw err;
    }
}

const login = async ( data ) => {
    try {
        let response = await api.post('login', data);
        return response.data
    } catch (err) {
        throw err;
    }
}

const updateData = async ( data ) => {
    try {
        let response = await api.post('editdata', data);
        //return response.data
    } catch (err) {
        throw err;
    }
}

const lastOrders = async () => {
    try {
        let response = await api.get('lastOrders');
        return response.data
    } catch (err) {
        throw err;
    }
}

const openOrder = async () => {
    try {
        let response = await api.get('openOrders');
        return response.data
    } catch (err) {
        throw err;
    }
}

const confirmReceived = async ( data ) => {
    try {
        let response = await api.post('confirmReceived', data);
    } catch (err) {
        throw err;
    }
}

const hortiFruit = async () => {
    try {
        let response = await api.get('hortiFruit');
        return response.data
    } catch (err) {
        throw err;
    }
}

const acouque = async () => {
    try {
        let response = await api.get('acouque');
        return response.data
    } catch (err) {
        throw err;
    }
}

const agua = async () => {
    try {
        let response = await api.get('agua');
        return response.data
    } catch (err) {
        throw err;
    }
}

const padaria = async () => {
    try {
        let response = await api.get('padaria');
        return response.data
    } catch (err) {
        throw err;
    }
}


const BuyerProvider ={
    registerBuyer,
    login,
    updateData,
    lastOrders,
    openOrder,
    confirmReceived,
    hortiFruit,
    acouque,
    agua,
    padaria
}

export default BuyerProvider;

