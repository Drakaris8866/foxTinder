export interface IAuthResponse {
    user: IUser,
    token: string,
    message: string
}

export interface IUser {
    username: string,
    password: string,
    _id: string,
    personalization: {
        images: [],
        interests: [],
        about?: string,
        gender?: string
    }
}

export interface IUnamePassword {
    username: string,
    password: string,
}