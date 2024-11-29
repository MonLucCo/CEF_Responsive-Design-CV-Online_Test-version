import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles pour le composant Project
import '../assets/styles/components/Project.scss';

const Project = ({ image, title, description, link, tools }) => {
    return (
        <div className="card">
            {/* Contenu de la carte avec l'image, le titre, la description et le bouton */}
            <div className="card-content text-center">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-outline-primary" target='_blank' rel="noopener noreferrer">Voir</a>
                </div>
            </div>
            {/* Footer avec les outils */}
            <div className="card-footer d-flex align-items-center justify-content-center">
                <p className="footer-text mb-0">Site réalisé {tools}</p>
            </div>
        </div>
    );
};

Project.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
};

export default Project;
