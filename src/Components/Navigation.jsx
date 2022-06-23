import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/about">About Me</a>
        <a className="link link-hover" href="/portfolio">Portfolio</a>
        <a className="link link-hover" href="/contact">Contact</a>
    </div>
                </div>
                <Link to='/about'>Krystopher Quintero</Link>
            </div>
    )}

    export default Navigation;
