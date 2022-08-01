import axios from "axios"

const apiUrl = 'http://localhost:8080/bookInfos'

export const getAllBookInfo = async () => {
    const url = apiUrl + `/home`
    const response = await axios.get(url)
    if (response.status === 200) {
        return response.data
    }
    return null
}