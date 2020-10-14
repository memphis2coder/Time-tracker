import React from 'react';
// react-router-dom
import {Link} from 'react-router-dom'
// styles
import './header.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <span className='logo'>LOGO</span>
        </Link>
    </div>
);

export default Header;