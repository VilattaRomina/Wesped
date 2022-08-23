import axios from 'axios'

export const AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT || "http://ec2-18-224-138-216.us-east-2.compute.amazonaws.com:8080",
    headers: {
        Accept: "application/json",
    },
    timeout: 31000,
})
