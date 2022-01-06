import AsyncStorage from '@react-native-async-storage/async-storage';


export const _storeData = async (type, data) => {
    try {
        await AsyncStorage.setItem(type, JSON.stringify(data));
        return true;
    } catch (err) {
        throw err;
    }
}

export const getStoragedUser = async () => {
    const storagedUser = await AsyncStorage.getItem('@storage_user');
    return JSON.parse(storagedUser);
}

