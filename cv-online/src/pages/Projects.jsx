import React from 'react';

// Importation des styles
import '../assets/styles/pages/Projects.scss';

// Importation des composants
import Banner from '../components/Banner';
import Project from '../components/Project';
import IntroPage from '../components/IntroPage';

// Importation des données des projets
import { projectsData } from '../data/data';

const Projects = () => {
    return (
        <div className='projects-page'>
            {/* Bannière de la page */}
            <Banner />

            <div className="page-content container py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title='Portfolio'
                    description='Voici quelques-unes de mes réalisations.'
                />

                {/* Section des projets */}
                <section className="projects-section row">
                    {projectsData.map((project, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                            <Project
                                imageName={project.imageName}
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
