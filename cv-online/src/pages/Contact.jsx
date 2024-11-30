import React, { useEffect, useState } from 'react';

// Importation des fonctions utilitaires 
import { loadData } from '../utils/dataLoader';

// Importation des styles
import '../assets/styles/pages/Contact.scss';

// Importation des composants
import Banner from '../components/Banner';
import IntroPage from '../components/IntroPage';

// Importation des données des projets
import { DATA_PATHS, CONSTANTS } from '../config/config';

const Contact = () => {
    // État pour stocker les données des compétences
    const [contactData, setContactData] = useState([]);

    // Utilisation de useEffect pour charger les données au montage du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chargement des données depuis data.json
                const data = await loadData(DATA_PATHS.localJsonData); // Utilisation de la variable centralisée
                setContactData(data.contactData);
            } catch (error) {
                // Gestion des erreurs de chargement des données
                console.error('Erreur de chargement des données:', error);
            }
        };

        fetchData();
    }, []);

    const contactDetails = [
        { label: 'Nom', value: contactData.name },
        { label: 'Adresse', value: `${contactData.address?.rue}, ${contactData.address?.codePostal} ${contactData.address?.ville}, ${contactData.address?.pays}` },
        { label: 'Téléphone', value: contactData.phone },
        { label: 'LinkedIn', value: contactData.socialLinks?.LinkedIn },
        { label: 'Twitter', value: contactData.socialLinks?.Twitter },
        { label: 'Facebook', value: contactData.socialLinks?.Facebook }
    ];

    return (
        <div className='contact-page'>
            {/* Bannière de la page */}
            <Banner />

            <div className="page-content container py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title={CONSTANTS.contactPageTitle}
                    description={CONSTANTS.contactPageSubTitle}
                />

                {/* Section du contact */}
                <section className="contact-section row">
                    {contactDetails.map((contact, index) => (
                        <article key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <strong>{contact.label} : </strong> {contact.value}
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Contact;