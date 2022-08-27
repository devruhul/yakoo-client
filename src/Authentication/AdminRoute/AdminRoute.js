import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { loading, yokooUser, admin } = useAuth()

    // get current location
    let location = useLocation();

    // loading for get the user 
    if (loading) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    // chcek user email and admin status if both of them are true then render children
    if (yokooUser?.email && admin) {
        return children;
    }

    // if user is not admin then redirect to home page
    return <Navigate to="/login" state={{ from: location }
    } replace />;
};

export default AdminRoute;