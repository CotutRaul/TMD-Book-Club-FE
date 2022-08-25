import axios from "axios"
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";


const instance = axios.create({
    baseURL: 'http://localhost:8080/users',
    headers: { 'Authorization': `Bearer ${Cookies.get("jwt")}`, }
});




export const authenticateLogin = async (props) => {
    const body = {
        username: props.email,
        password: props.password
    }
    const response = await axios.post("http://localhost:8080/authenticate/login",body)

    if (response.status === 200) {
        Cookies.set("jwt", response.data.jwt)
        const payload = jwt_decode(response.data.jwt)
        return {id:payload.id, name:payload.name, email:payload.sub}
    }
    if (response.status === 204) {
        alert("Wrong data inserted")
        return null
    }

    return null
}


export const authenticateRegister = async (props) => {
    const response = await axios.post("http://localhost:8080/authenticate/register", props)
        .catch(error => {
            if (error.response.status === 400) {
                alert("Wrong data inserted!")
            }
        })
    if (response) {
        if (response.status === 200) {
            Cookies.set("jwt", response.data.jwt)
            const payload = jwt_decode(response.data.jwt)
            return {id:payload.id, name:payload.name, email:payload.sub}
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