import React from 'react';

// Importation des composants
import Skills from '../components/Skills';

// Importation des images
import johnDoeAbout from '../assets/images/home/john-doe-about.jpg';

// Importation des styles
import '../assets/styles/pages/Home.scss';

const Home = () => {
    // Tableau des compétences avec les niveaux et les couleurs Bootstrap correspondantes
    const skills = [
        { name: 'html5', level: '90%', color: 'bg-danger' }, // $rouge-600
        { name: 'css3', level: '80%', color: 'bg-info' }, // $cyan-300
        { name: 'JavaScript', level: '70%', color: 'bg-warning' }, // $jaune-300
        { name: 'php', level: '60%', color: 'bg-success' }, // $vert-600
        { name: 'React', level: '50%', color: 'bg-primary' }, // $bleu-400
    ];

    /// Fonction pour calculer l'offset
    const calculateOffset = () => {
        const offsetValue = getComputedStyle(document.documentElement).getPropertyValue('--offset-scroll');
        const offsetUnit = offsetValue.match(/[a-zA-Z]+/)[0]; // Extraire l'unité (rem)
        const offsetNumber = parseFloat(offsetValue); // Extraire la valeur numérique
        let offset = 0;
        if (offsetUnit === 'rem') {
            const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            offset = offsetNumber * rootFontSize; // Convertir rem en pixels
        } else {
            offset = offsetNumber; // Si l'unité est déjà en pixels
        } return offset;
    };

    // Fonction pour faire défiler la page jusqu'à la section "À propos" avec un décalage
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        const offset = calculateOffset(); // Utiliser la fonction pour calculer l'offset
        console.log('Offset value:', offset); // Afficher la valeur de offset dans la console
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = aboutSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    return (
        <div className="home">
            <div className="hero-section d-flex flex-column justify-content-center align-items-center">
                <div className="overlay"></div>
                <div className="container text-center">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button onClick={scrollToAbout} className="btn btn-primary mt-3">
                        En savoir plus
                    </button>
                </div>
            </div>
            <section id="about" className="about-section py-5">
                <div className="container">
                    <div className="card shadow"> {/* Ajout de la classe shadow pour l'ombre */}
                        <div className="card-body p-5">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <h2 className="text-start">À propos</h2>
                                    <hr className="mt-2 mb-4" /> {/* Barre de séparation pour la première colonne */}
                                    <p>
                                        Passionné par l'informatique et les nouvelles technologies, j'ai suivi une
                                        formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette
                                        formation, j'ai pu acquérir des bases solides pour travailler dans le domaine
                                        du <strong>développement web</strong>.
                                    </p>
                                    <p>
                                        Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale
                                        pour consolider ma formation de <strong>développeur web full stack</strong>.
                                    </p>
                                    <p>
                                        J'accorde une attention particulière à la qualité du code que j'écris et je
                                        respecte les bonnes pratiques du web.
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 text-center">
                                    <img
                                        src={johnDoeAbout}
                                        alt="John Doe"
                                        className="img-fluid rounded mb-3"
                                    />
                                    <h3 className="text-start">Mes compétences</h3>
                                    <Skills skills={skills} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
