import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Oops! can't find anything, Go back to <Link to="/">Home</Link> </h2>
        </div>
    );
};

export default NotFound;