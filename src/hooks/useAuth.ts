import { useTypedSelector } from "../store/store";

export const useAuth = () => useTypedSelector(({ user }) => user.user);