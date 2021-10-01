import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
    }
    const headerStyle = {
        padding: 13, margin: 10, textDecoration: 'none',
        background: 'skyblue'
    };
    return (
        <nav className="header-container">
            <NavLink style={headerStyle} activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink style={headerStyle} activeStyle={activeStyle} to="/friends">Friends</NavLink>
            <NavLink style={headerStyle} activeStyle={activeStyle} to="/about">About</NavLink>
            <NavLink style={headerStyle} activeStyle={activeStyle} to="/about/culture">Culture</NavLink>
        </nav>
    );
};

export default Header;