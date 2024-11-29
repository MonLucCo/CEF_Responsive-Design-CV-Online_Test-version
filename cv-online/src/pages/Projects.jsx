import React, { useEffect, useState } from 'react';
import { loadData } from '../utils/dataLoader';
import { CONSTANTS, DATA_PATHS } from '../config/config';

// Importation des styles
import '../assets/styles/pages/Projects.scss';

// Importation des composants
import Banner from '../components/Banner';
import Project from '../components/Project';
import IntroPage from '../components/IntroPage';

const Projects = () => {
    // État pour stocker les données des projets
    const [projectsData, setProjectsData] = useState([]);

    // Utilisation de useEffect pour charger les données au montage du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chargement des données depuis data.json
                const data = await loadData(DATA_PATHS.localJsonData); // Utilisation de la variable centralisée
                setProjectsData(data.projectsData);
            } catch (error) {
                // Gestion des erreurs de chargement des données
                console.error('Erreur de chargement des données:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='projects-page'>
            {/* Bannière de la page */}
            <Banner />

            <div className="page-content container py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title={CONSTANTS.projectsPageTitle}
                    description={CONSTANTS.projectsPageSubTitle}
                />

                {/* Section des projets */}
                <section className="projects-section row">
                    {projectsData.map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <Project
                                image={project.imageUrl}
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                tools={project.tools}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Projects;
