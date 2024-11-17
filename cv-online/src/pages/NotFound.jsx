import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Page non trouvée</h2>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="/" className="btn btn-primary me-2">Retour à l'accueil</Link>
            <button onClick={() => navigate(-1)} className="btn btn-secondary">Retour à la page précédente</button>
        </div>
    );
};

export default NotFound;
