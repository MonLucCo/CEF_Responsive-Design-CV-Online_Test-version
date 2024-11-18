import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-secondary text-light text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand text-light" to="/">John Doe</Link>
                    <button
                        className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/projects">Réalisations</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <NavLink className="nav-link py-3 px-0 px-lg-3 rounded" to="/contact">Me contacter</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
