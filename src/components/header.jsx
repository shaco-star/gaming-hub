// Header.js
import React from 'react';
import '../style/header.css';
import logo from '../assets/Gaming Hub.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="logo"><img src={logo} alt="gaming hub logo" /></div>
            <nav className="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
