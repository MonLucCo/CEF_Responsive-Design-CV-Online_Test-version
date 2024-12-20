import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Importation des styles
import '../assets/styles/components/Footer.scss';

// Importation des fonctions utilitaires 
import { scrollToAbout } from '../utils/scrollUtils';
import handleLinkClick from "../utils/handleLinkClick";
import { loadData } from '../utils/dataLoader';

// Importation des données des projets
import { DATA_PATHS } from '../config/config';

const Footer = () => {
    const navigate = useNavigate();

    const [projectsData, setProjectsData] = useState([]);
    const [blogPostsData, setBlogPostsData] = useState([]);
    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chargement des données depuis data.json
                const data = await loadData(DATA_PATHS.localJsonData);
                setProjectsData(data.projectsData);
                setBlogPostsData(data.blogPostsData);
                setContactData(data.contactData);
            } catch (error) {
                // Gestion des erreurs de chargement des données
                console.error('Erreur de chargement des données:', error);
            }
        };

        fetchData();
    }, []);

    const handleAboutClick = (e) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => {
            scrollToAbout();
        }, 100);
    };

    const recentPosts = blogPostsData.slice(0, 3); // Obtenir les 3 derniers articles publiés

    // Déstructuration des données de contact avec un préfixe et valeurs par défaut 
    const { name: contactName = '', address: contactAddress = {}, phone: contactPhone = '', socialLinks: contactSocialLinks = {} } = contactData;
    const { rue: contactRue = '', codePostal: contactCodePostal = '', ville: contactVille = '', pays: contactPays = '' } = contactAddress;
    const { Viewer } = contactSocialLinks;

    // Construire dynamiquement l'URL du viewer 
    const viewerUrl = Viewer ? `${Viewer.link}?${Viewer.paramLabel}=${encodeURIComponent(Viewer.paramValue)}` : '';
    console.log('adresse URL calculée >> ', { viewerUrl });

    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <div className="card-body">
                            <p className="footer-title fs-4" aria-label='Contact Information : John Doe'><strong>{contactName}</strong></p>
                            <p className="card-text">{contactRue}<br />{contactCodePostal} {contactVille}, {contactPays}<br />Téléphone : {contactPhone}</p>
                            <a href={contactSocialLinks.GitHub} target="_blank" rel="noopener noreferrer nofollow"
                                className="me-2 custom-link" aria-label={`GitHub de ${contactName}`}>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href={contactSocialLinks.Twitter} target="_blank" rel="noopener noreferrer nofollow"
                                className="me-2 custom-link" aria-label={`Twitter de ${contactName}`}>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href={contactSocialLinks.LinkedIn} target="_blank" rel="noopener noreferrer nofollow"
                                className="me-2 custom-link" aria-label={`LinkedIn de ${contactName}`}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <div className="card-body">
                            <p className="footer-title fs-4" aria-label='Liens utiles'><strong>Liens utiles</strong></p>
                            <ul className="list-unstyled custom-list">
                                <li><Link to="/" className="custom-link">Accueil</Link></li>
                                <li><a href="/#about" onClick={handleAboutClick} className="custom-link">À propos</a></li>
                                <li><Link to="/services" className="custom-link">Services</Link></li>
                                <li><Link to="/contact" className="custom-link">Me contacter</Link></li>
                                <li><Link to="/legal-notice" className="custom-link">Mentions légales</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <div className="card-body">
                            <p className="footer-title fs-4" aria-label='Mes dernières réalisations'><strong>Mes dernières réalisations</strong></p>
                            <ul className="list-unstyled custom-list">
                                {projectsData.map((project, index) => (
                                    <li key={index}>
                                        <a className="custom-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a className="custom-link" href={viewerUrl} target="_blank" rel="noopener noreferrer">
                                        App GitHub Profil Viewer
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 pt-2">
                        <div className="card-body">
                            <p className="footer-title fs-4" aria-label='Mes derniers articles'><strong>Mes derniers articles</strong></p>
                            <ul className="list-unstyled custom-list">
                                {recentPosts.map(post => (
                                    <li key={post.id}>
                                        <a className="custom-link"
                                            href={post.linkPost}
                                            onClick={(event) => handleLinkClick(event, post.title, post.linkPost)}
                                            target="_blank" rel="noopener noreferrer">
                                            {post.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
