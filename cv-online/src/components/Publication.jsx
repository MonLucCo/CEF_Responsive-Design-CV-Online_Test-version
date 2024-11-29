import React from 'react';
import PropTypes from 'prop-types';

// Importation des fonctions utilitaires 
import handleLinkClick from '../utils/handleLinkClick';

// Importation des styles pour le composant
import '../assets/styles/components/Publication.scss';


const Publication = ({ image, title, date, description, linkPost }) => {
    return (
        <article className="publication card">
            <img src={image} alt={title} className="publication__image" />
            <div className="publication__content card-body">
                <h2 className="publication__title">{title}</h2>
                <p className="publication__description">{description}</p>
                <button className="btn btn-primary" onClick={(event) => handleLinkClick(event, title, linkPost)}>Lire la suite</button>
            </div>
            {/* Footer de la card */}
            <div className="publication__footer card-footer">
                <p className="publication__date mb-0">Publié le {date}</p>
            </div>
        </article>
    );
};

Publication.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    linkPost: PropTypes.string
};

export default Publication;
