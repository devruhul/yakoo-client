import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, yokooUser } = useAuth();

  // Get the current location
  let location = useLocation();

  // Wait until the user is loaded before rendering the route
  if (loading) {
    return (
      <div className='text-center my-6'>
        <i className='fa-solid fa-3x fa-spinner'></i>
      </div>
    );
  }

  // If user logged in then show all the children components
  if (yokooUser?.email) {
    return children;
  }

  // Redirect to login page
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
