import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
    // const loginStatus = auth.currentUser // local storage check for token
    // const loginStatus = true
    const loginStatus = localStorage.getItem("@user")
    return (
        loginStatus ? <Outlet /> : <Navigate to="/signup" />
    )
}