import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center flex h-[80vh] justify-center items-center space-y-5 flex-col'>

            <div className="text-4xl font-bold">404 not found</div>
            <Link to={'/'} className='btn btn-error'>Back to Home</Link>
        </div>
    );
};

export default NotFound;