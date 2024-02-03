import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

export const PrivateRoutes = () => {
    const loginStatus = auth.currentUser
    return (
        loginStatus ? <Outlet /> : <Navigate to="/signup" />
    )
}