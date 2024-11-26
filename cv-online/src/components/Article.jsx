import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Article.scss';

const Article = ({ icon, title, text }) => {
    return (
        <div className="card shadow py-4 h-100">
            <div className="card-body text-center">
                <i className={`fas ${icon} mb-3`}></i>
                <h2 className="card-title text-uppercase fs-5 fw-bold">{title}</h2>
                <p className="card-text mt-2" dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
        </div>
    );
};

Article.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default Article;
