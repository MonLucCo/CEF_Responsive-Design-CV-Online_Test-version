import React from 'react';
import PropTypes from 'prop-types';

// Importation des styles
import '../assets/styles/components/IntroPage.scss';

const IntroPage = ({ title, description }) => {
    return (
        <section className="intro-section text-center py-3">
            <h1 className='text-uppercase fw-bold'>{title}</h1>
            <p>{description}</p>
            <hr className="separator mx-auto w-25" />
        </section>
    );
};

IntroPage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default IntroPage;
