import React, { useEffect, useState } from 'react';

// Importation des fonctions utilitaires 
import { loadData } from '../utils/dataLoader';

// Importation des styles
import '../assets/styles/pages/Blog.scss';

// Importation des composants
import Banner from '../components/Banner';
import IntroPage from '../components/IntroPage';
import Publication from '../components/Publication';

// Importation des données des projets
import { DATA_PATHS, CONSTANTS } from '../config/config';

const Blog = () => {
    // État pour stocker les données des compétences
    const [blogPostsData, setBlogPostsData] = useState([]);

    // Utilisation de useEffect pour charger les données au montage du composant
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Chargement des données depuis data.json
                const data = await loadData(DATA_PATHS.localJsonData); // Utilisation de la variable centralisée
                setBlogPostsData(data.blogPostsData);
            } catch (error) {
                // Gestion des erreurs de chargement des données
                console.error('Erreur de chargement des données:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='blog-page'>
            {/* Bannière de la page */}
            <Banner />

            <div className="page-content container py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title={CONSTANTS.blogPageTitle}
                    description={CONSTANTS.blogPageSubTitle}
                />

                {/* Section des publications */}
                <section className="blog-section row">
                    {blogPostsData.map((post) => (
                        <article className="col-12 col-md-6 col-lg-4 mb-4">
                            <Publication
                                key={post.id}
                                image={post.imageUrl}
                                title={post.title}
                                description={post.description}
                                date={post.date}
                                linkPost={post.linkPost}
                            />
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Blog;
