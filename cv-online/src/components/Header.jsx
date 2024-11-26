import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
    return (
        <header>
            <nav className="navbar container-fluid navbar-expand-lg text-uppercase bg-secondary fixed-top">
                <div className="container">
                    <Link className="navbar-brand text-light" to="/">John Doe</Link>
                    <button className="navbar-toggler font-weight-bold text-light"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link py-3 px-2 px-md-3t" to="/">Accueil</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link py-3 px-2 px-md-3" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link py-3 px-2 px-md-3" to="/projects">Réalisations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link py-3 px-2 px-md-3" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link py-3 px-2 px-md-3" to="/contact">Me contacter</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
