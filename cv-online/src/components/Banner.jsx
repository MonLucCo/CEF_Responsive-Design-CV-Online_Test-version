import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Banner.scss';

const Banner = () => {
    return (
        <div className="page-banner">
        </div>
    );
};

Banner.propTypes = {
    image: PropTypes.string.isRequired,
};

export default Banner;
