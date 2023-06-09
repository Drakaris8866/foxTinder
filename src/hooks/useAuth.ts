import { useTypedSelector } from "../store/store";

export const useAuth = () => useTypedSelector(({ auth }) => auth.data);