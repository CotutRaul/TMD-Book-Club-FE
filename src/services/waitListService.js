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