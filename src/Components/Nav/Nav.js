import React from 'react';
// styles
import './Nav.css';
const Nav = () => {
    return (
        <nav className="nav">
            <div className="header">
                <h1>Not a Good RPG</h1>
                <h4>A Game By Eduardo Franco</h4>
            </div>
            <div className="personal-links">
                <a href="linkedin.com/in/edfrancocano">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="github.com/edfrancocano">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="eduardofranco.me">
                    <i className="fas fa-book-open"></i>
                </a>
            </div>
        </nav>
    );
};

export default Nav;
