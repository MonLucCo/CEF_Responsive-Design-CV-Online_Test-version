import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-dark text-white py-3">
            <div className="container text-center">
                <h1>Mon Portfolio</h1>
            </div>
            <nav className="bg-light py-2">
                <div className="container">
                    <Link to="/" className="me-3">Accueil</Link>
                    <Link to="/services" className="me-3">Services</Link>
                    <Link to="/projects" className="me-3">Réalisations</Link>
                    <Link to="/blog" className="me-3">Blog</Link>
                    <Link to="/contact" className="me-3">Contact</Link>
                    <Link to="/legal-notice">Mentions légales</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
