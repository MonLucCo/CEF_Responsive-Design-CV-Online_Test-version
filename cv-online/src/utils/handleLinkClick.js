// handleLinkClick.js

import showAlert from './showAlert';

const handleLinkClick = (e, title, linkPost) => {
    e.preventDefault(); // Empêche le défilement vers le haut de la page
    if (linkPost) {
        window.open(linkPost, '_blank', 'noopener,noreferrer'); // Ouvre le lien dans une nouvelle fenêtre ou un nouvel onglet
    } else {
        showAlert(title);
    }
};

export default handleLinkClick;
