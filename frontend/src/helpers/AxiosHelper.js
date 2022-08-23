import axios from 'axios'

export const AxiosIntance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://localhost:8080",
    headers: {
        Accept: "application/json",
    },
    timeout: 31000,
})
