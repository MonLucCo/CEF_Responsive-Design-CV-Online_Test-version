import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Importation des styles
import '../assets/styles/components/Footer.scss';

// Importation des données des projets
import { projectsData } from '../data/data';

// Importation des fonctions utilitaires 
import { scrollToAbout } from '../utils/scrollUtils';

const Footer = () => {
    const navigate = useNavigate();

    const handleAboutClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            scrollToAbout();
        }, 100);
    };

    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <h5>John Doe</h5>
                        <p>40 rue Laure Diebold<br />69009 Lyon, France<br />Téléphone : 06 20 30 40 50</p>
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer nofollow" className="me-2">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer nofollow" className="me-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com/in/johndoe123" target="_blank" rel="noopener noreferrer nofollow">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled custom-list">
                            <li><Link to="/" className="custom-link">Accueil</Link></li>
                            <li><a href="/#about" onClick={handleAboutClick} className="custom-link">À propos</a></li>
                            <li><Link to="/services" className="custom-link">Services</Link></li>
                            <li><Link to="/contact" className="custom-link">Me contacter</Link></li>
                            <li><Link to="/legal-notice" className="custom-link">Mentions légales</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled custom-list">
                            {projectsData.map((project, index) => (
                                <li key={index}>
                                    <a className="custom-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <h5>Mes derniers articles</h5>
                        <ul className="list-unstyled custom-list">
                            <li><Link to="/blog/html-css" className="custom-link">Coder son site HTML/CSS</Link></li>
                            <li><Link to="/blog/sell-products" className="custom-link">Vendre ses produits sur le web</Link></li>
                            <li><Link to="/blog/google-ranking" className="custom-link">Se positionner sur Google</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondary text-center text-light py-2">
                <p className='mb-0 py-2'>&copy; Designed by John Doe</p>
                <button className="btn scroll-top d-none mt-2">
                    <i className="fas fa-angles-up me-2"></i>Retour en haut
                </button>
            </div>
        </footer>
    );
};

export default Footer;
