import axios from "axios"


const apiUrl = "http://localhost:8080/waitLists"

export const addWaitList = async (props) => {
    const url = apiUrl + `?userId=${props.userId}&bookId=${props.bookId}`

    const response = await axios.post(url)        
    .catch(error => {
        if (error.response.status === 400) {
            alert("Add to waiting List unsuccessful")
        }
    })

    if (response.status === 201) {
        return response.data
    }
    return null
}

export const getWaitListForUser = async (props) => {
    const url = apiUrl + `?userId=${props.userId}`

    const response = await axios.get(url)        

    if (response.status === 200) {
        return response.data
    }
    return null
}

export const deleteWaitList = async (props) => {
    const url = apiUrl + `?id=${props.id}`

    const response = await axios.delete(url)        

    if (response.status === 200) {
        alert("Book deleted from waiting list successfully")
    }
    if(response.status === 204){
        alert("Book deleted from waiting list unsuccessfully")
    }
    return null
}
