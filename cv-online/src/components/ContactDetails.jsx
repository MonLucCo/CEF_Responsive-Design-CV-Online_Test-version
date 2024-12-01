import React from 'react';

const ContactDetails = ({ contactData }) => {
    return (
        <section className="contact-details col-md-6 p-0">
            <div className="card border-0">
                <div className="card-body">
                    <h2 className="card-title">Mes coordonnées</h2>
                    <hr className='separator text-primary text-opacity-100 border-3 mt-2 mb-4' />
                    <address className='address-container card-text mt-2'>
                        <p className="no-margin">
                            <i className='fas fa-map-marker-alt me-1 text-body' aria-hidden="true"></i>
                            <span className="visually-hidden">Adresse : </span>
                            {contactData.address?.rue}, {contactData.address?.codePostal} {contactData.address?.ville}, {contactData.address?.pays}
                            <br />
                            <i className='fas fa-mobile-alt me-1 text-body' aria-hidden="true"></i>
                            <span className="visually-hidden">Téléphone : </span>
                            {contactData.phone}
                        </p>
                    </address>
                    <div className="map-container">
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(contactData.address?.rue + ', ' + contactData.address?.ville + ', ' + contactData.address?.pays)}&output=embed`}
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
