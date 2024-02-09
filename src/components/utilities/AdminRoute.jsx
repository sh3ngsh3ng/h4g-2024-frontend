import { Outlet, Navigate } from 'react-router-dom';

export const AdminRoutes = () => {
    // const loginStatus = auth.currentUser // local storage check for token
    const loginStatus = localStorage.getItem("@user")
    const adminStatus = true

    return (
        loginStatus && adminStatus ? <Outlet /> : <Navigate to="/signup" />
    )
}