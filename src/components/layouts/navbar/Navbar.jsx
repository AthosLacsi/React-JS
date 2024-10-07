
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../../common/cartWidget/CartWidget';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">A Fondo Motores</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/sport">Deportivas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/touring">Touring</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/cruiser">Cruiser</Link>
                    </li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
