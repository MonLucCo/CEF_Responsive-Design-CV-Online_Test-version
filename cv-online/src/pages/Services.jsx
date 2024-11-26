import React from 'react';

// Importation des styles
import '../assets/styles/pages/Services.scss';

// Importation des composants
import Article from '../components/Article';
import Banner from '../components/Banner';
import IntroPage from '../components/IntroPage';

const Services = () => {
    return (
        <div className='services-page'>
            {/* Bannière de la page */}
            <Banner />

            <div className="page-content container py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title='Mon offre de services'
                    description='Voici les prestations sur lesquelles je peux intervenir.'
                />

                {/* Section des services */}
                <section className="services-section row articles my-3 py-3">
                    <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
                        <Article
                            icon="fa-display fa-2x icon--custom-color"
                            title="UX Design"
                            text="L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."
                        />
                    </div>
                    <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
                        <Article
                            icon="fa-file-code fa-2x icon--custom-color"
                            title="Développement web"
                            text="Le <strong>développement de site web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."
                        />
                    </div>
                    <div className="col-12 col-md-4 d-flex mb-4 mb-md-0">
                        <Article
                            icon="fa-magnifying-glass-dollar fa-2x icon--custom-color"
                            title="Référencement"
                            text="Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;
