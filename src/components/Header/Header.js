import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-center mb-4'>
            <Link className='mx-3' to='/login now'>Login Now</Link>
            <Link className='' to='/register now'>Register Now</Link>
        </div>
    );
};

export default Header;