import {interseptor as axios}  from "../api/interseptors";
import { IAuthResponse } from './../store/auth/auth.types';

class AuthService {
    async registration(username: string, password: string) {
        const response = await axios.post<IAuthResponse>("/auth/registration", {
            username, password
        })

        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data.user))
            localStorage.setItem("token", JSON.stringify(response.data.token))
        }

        return response
    }

    async login(username: string, password: string) {
        const response = await axios.post<IAuthResponse>("/auth/login", {
            username, password
        })

        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data.user))
            localStorage.setItem("token", JSON.stringify(response.data.token))
        }

        return response
    }

    async logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }
}

export default new AuthService()