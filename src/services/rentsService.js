import axios from "axios"


const apiUrl = 'http://localhost:8080/rents'

export const extendRent = async (props) => {
    const url = apiUrl + `?id=${props.id}&period=${props.period}`

    const response = await axios.put(url)        
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