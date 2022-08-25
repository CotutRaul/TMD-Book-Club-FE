import axios from "axios"
import Cookies from 'js-cookie';


const instance = axios.create({
    baseURL: 'http://localhost:8080/bookInfos',
    headers: { 'Authorization': `Bearer ${Cookies.get("jwt")}`, }
});

export const getAllBookInfo = async () => {
    const response = await instance.get("/home")
    if (response.status === 200) {
        return response.data
    }
    return null
}