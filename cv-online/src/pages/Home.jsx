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

    // Fonction pour faire défiler la page jusqu'à la section "À propos" avec recalage des Top-offsets
    function scrollToAbout() {
        const aboutSection = document.getElementById('about');
        const aboutOffsetTop = parseFloat(window.getComputedStyle(aboutSection).marginTop)
        const homeSection = document.getElementById('home');
        const homeOffsetTop = parseFloat(window.getComputedStyle(homeSection).marginTop)
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - aboutOffsetTop - homeOffsetTop,
                behavior: 'smooth'
            });
        }
    }


    return (
        <div id='home' className="home-page">
            <section className="hero-section d-flex flex-column justify-content-center align-items-center">
                <div className="overlay z-1"></div>
                <div className="container z-2 text-center">
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button onClick={scrollToAbout} className="btn btn-primary mt-3"> En savoir plus </button>
                </div>
            </section>
            <section id="about" className="about-section m-5">
                <div className="container">
                    <div className="card shadow"> {/* Ajout de la classe shadow pour l'ombre */}
                        <div className="card-body p-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
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
                                <div className="col-12 col-md-6">
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
