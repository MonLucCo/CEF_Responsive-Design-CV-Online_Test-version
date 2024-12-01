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
import ContactForm from '../components/ContactForm';
import ContactDetails from '../components/ContactDetails';

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

    return (
        <section className='contact-page'>
            <div className="overlay z-1"></div>
            <div className='card-group z-2 pt-4 pb-5'>
                <div className="page-content card container d-flex justify-content-center align-items-center py-4">
                    {/* Section d'introduction */}
                    <IntroPage
                        title={CONSTANTS.contactPageTitle}
                        description={CONSTANTS.contactPageSubTitle}
                    />
                    {/* Section du contact */}
                    <section className="contact-section container">
                        <div className='row'>
                            <ContactForm />
                            <ContactDetails contactData={contactData} />
                        </div>
                    </section>
                </div>
            </div>

        </section>
    );
};

export default Contact;