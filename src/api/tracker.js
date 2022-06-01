import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: 'https://react-native-tracks.herokuapp.com/api',
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            console.log(token)
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance