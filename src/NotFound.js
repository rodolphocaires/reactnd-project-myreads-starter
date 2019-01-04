import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Link to='/'>
            <div className="not-found">
                Page not found
            </div>
        </Link>
    );
}

export default NotFound;