import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                    <ul>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <Link to='/about'>Krystopher Quintero</Link>
            </div>
    )}

    export default Navigation;
