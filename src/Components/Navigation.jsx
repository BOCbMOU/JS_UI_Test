import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ user, logout }) => {
    return (
        <nav className="list-navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">
                        Registration
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/posts">
                        Posts
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users/self">
                        My page
                    </Link>
                </li>
            </ul>
            {user.token ? <button className='btn btn-light m-md-1' onClick={logout}>Log Out</button> : null}
        </nav>
    );
};

export default Navigation;