import axios from "axios"

const apiUrl = 'http://localhost:8080/users'



export const getUserByEmailAndPassword = async (props) => {
    const url = apiUrl + `?email=${props.email}&password=${props.password}`

    const response = await axios.get(url)

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
    const response = await axios.post(apiUrl, props)
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
    const url = apiUrl + `?id=${props.id}`
    const response = await axios.post(url, props.bookInfo)
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
    const url = apiUrl + '/myBooks?id=' + props.id
    const response = await axios.get(url)
    if (response.status === 200) {
        return response.data
    }

    return null

}

export const getMyRented = async (props) => {
    const url = apiUrl + '/myRented?id=' + props.id
    const response = await axios.get(url)
    if (response.status === 200) {
        return response.data
    }

    return null
}