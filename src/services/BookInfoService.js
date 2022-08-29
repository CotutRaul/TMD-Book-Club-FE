import axios from "axios"
import { store } from "../state/store"

const instance = () => {
    return axios.create({
        baseURL: 'http://localhost:8080/bookInfos',
        headers: { 'Authorization': `Bearer ${store.getState().jwt.value}`, }
    });
}

export const getAllBookInfo = async () => {
    const response = await instance().get("/home")
    if (response.status === 200) {
        return response.data
    }
    return null
}