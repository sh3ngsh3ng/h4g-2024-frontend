import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

export const PrivateRoutes = () => {
    // const loginStatus = auth.currentUser // local storage check for token
    const loginStatus = true

    return (
        loginStatus ? <Outlet /> : <Navigate to="/signup" />
    )
}