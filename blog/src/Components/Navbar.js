import React from 'react';
// import '../styles/Navbar.css';
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <h3>Nicole's Blog.</h3>

            <div className='navbar__list'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/createPost">Create Post</Link>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Navbar