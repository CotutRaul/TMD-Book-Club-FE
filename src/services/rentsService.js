import axios from "axios"
import Cookies from 'js-cookie';


const instance = axios.create({
    baseURL: 'http://localhost:8080/rents',
    headers: { 'Authorization': `Bearer ${Cookies.get("jwt")}`, }
});


export const extendRent = async (props) => {
    const response = await instance.put(`?id=${props.id}&period=${props.period}`)        
    .catch(error => {
        if (error.response.status === 400) {
            alert("Extend unsuccessful")
        }
    })

    if (response.status === 204) {
        alert("Can no longer extend the rent for this book")
    }

    if (response.status === 200) {
        return response.data
    }
    return null
}


export const addRent = async (props) => {
    const response = await instance.post(`?userId=${props.userId}&bookId=${props.bookId}&period=${props.period}`)        
    .catch(error => {
        if (error.response.status === 400) {
            alert("Rent unsuccessful")
        }
    })

    if (response.status === 201) {
        return response.data
    }
    return null
}


export const getDateWhenBookWillBeAvailable = async (props) => {
    const response = await instance.get(`/availableDate?bookId=${props.bookId}`)        
    
    if (response.status === 200) {
        return response.data
    }
    if (response.status === 204) {
        return "Is available"
    }
    return null
}
