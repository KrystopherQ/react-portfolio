import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'btn-active' : ''}>About Me</a></li>
                        <li><a href="/portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'btn-active' : ''}>Portfolio</a></li>
                        <li><a href="/contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'btn-active' : ''}>Contact Me</a></li>
                    </ul>
                </div>
                <a href="/home" onClick={() => handlePageChange('About')} className="btn btn-ghost normal-case text-xl">Krystopher Quintero</a>
            </div>
            </div>
    )}

    export default Navigation;
