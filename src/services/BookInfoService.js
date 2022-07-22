import axios from "axios"

const apiUrl = 'http://localhost:8080/bookInfos'

export const getAllBookInfo = async () => {
    const response = await axios.get(apiUrl)
    if (response.status === 200) {
        return response.data
    }
    return null
}