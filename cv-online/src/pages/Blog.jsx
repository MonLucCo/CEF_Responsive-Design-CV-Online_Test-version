import React from 'react';

// Importation des styles
import '../assets/styles/pages/Blog.scss';

// Importation des composants
import Banner from '../components/Banner';
import IntroPage from '../components/IntroPage';
import Publication from '../components/Publication';

// Importation des données des projets
import { blogPostsData } from '../data/data';
import { CONSTANTS } from '../config/config';

const Blog = () => {
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
                                imagePath={`${post.imagePath}${post.imageName}`}
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
