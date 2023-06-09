export interface State<T>{
    isLoading: boolean
    data: T | null
    errors: string | null
}