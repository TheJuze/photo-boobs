import axios from 'axios';
import { default as constants } from "./constants";


const token = localStorage.getItem(constants.localStorage.authToken)

const restApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default restApi