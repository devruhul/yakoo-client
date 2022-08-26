import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { loading, yokooUser, admin } = useAuth()

    let location = useLocation();

    if (loading) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    if (yokooUser?.email && admin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }
    } replace />;
};

export default AdminRoute;