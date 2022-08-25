import axios from "axios"
import Cookies from 'js-cookie';


const instance = axios.create({
    baseURL: 'http://localhost:8080/users',
    headers: { 'Authorization': `Bearer ${Cookies.get("jwt")}`, }
});




export const getUserByEmailAndPassword = async (props) => {
    const response = await instance.get(`?email=${props.email}&password=${props.password}`)

    if (response.status === 200) {
        return response.data
    }
    if (response.status === 204) {
        alert("Wrong data inserted")
        return null
    }

    return null
}


export const addUser = async (props) => {
    const response = await instance.post("", props)
        .catch(error => {
            if (error.response.status === 400) {
                alert("Wrong data inserted!")
            }
        })
    if (response) {
        if (response.status === 201) {
            return response.data
        }
    }

    return null
}

export const addBook = async (props) => {
    const response = await instance.post(`?id=${props.id}`, props.bookInfo)
        .catch(error => {
            if (error.response.status === 400) {
                alert("Wrong data inserted!")
            }
        })
    if (response) {
        if (response.status === 201) {
            return response.data
        }
        if (response.status === 200) {
            return response.data
        }
    }

    return null
}

export const getMyBooks = async (props) => {
    const response = await instance.get(`/myBooks?id=${props.id}`)
    if (response.status === 200) {
        return response.data
    }

    return null

}

export const getMyRented = async (props) => {
    const response = await instance.get(`/myRented?id=${props.id}`)
    if (response.status === 200) {
        return response.data
    }

    return null
}