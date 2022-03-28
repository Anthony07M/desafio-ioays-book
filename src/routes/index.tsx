import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/login"
import { useAuth } from "../providers/Auth"

export const RoutesProvider = () => {

    const { token,  } = useAuth() 
    return(
        <Routes>
            <Route
                key={1}
                path="/"
                element={token ? <Navigate replace to="/home"/> :<Login/>}
            />
            <Route
                key={2}
                path="/home"
                element={token ?<Home/>: <Navigate replace to="/"/>}
            /> 
        </Routes>
    )
}