import React from 'react';
import { Outlet } from 'react-router-dom';

const BookBicycle = () => {
    return (
        <div>
            <h2>This is booking bicycle</h2>
            <Outlet />
        </div>
    );
};

export default BookBicycle;