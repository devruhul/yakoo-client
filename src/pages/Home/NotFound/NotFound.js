import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        // Not found page
        <div>
            <h2>Oops! can't find anything, Go back to <Link to="/"><button className='btn btn-primary'>Home</button></Link> </h2>
        </div>
    );
};

export default NotFound;