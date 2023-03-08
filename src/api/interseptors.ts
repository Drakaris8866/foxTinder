import axios from "axios";

export const interseptor = axios.create({
    baseURL: "http://localhost:5000"
})
