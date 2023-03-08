import {FC, ReactChild, ReactElement} from 'react'
import {useAuth} from "../hooks/useAuth";
import {Navigate, Outlet, useLocation} from "react-router-dom";

const PrivateRouter: FC = () => {
    const user = useAuth()

    const location = useLocation()

    return  user?.username ? <Outlet/> : <Navigate to="/login" state={{from: location}}/>
}

export default PrivateRouter;