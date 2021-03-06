import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
            <div className="grid grid-flow-col gap-4">
            <Link to='/about'>About Me</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            </div>
    )}

    export default Navigation;
