import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/budget">Budget</NavLink></li>
                <li><NavLink to="/expenses">Expenses</NavLink></li>
            </ul>
        </nav>
    );
}



export default Navbar;