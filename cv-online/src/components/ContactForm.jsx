import React from 'react';

const ContactForm = () => {
    return (
        <section className="contact-form col-md-6 p-0">
            <div className="card border-0">
                <div className="card-body">
                    <h2 className="card-title">Formulaire de contact</h2>
                    <hr className='separator text-primary text-opacity-100 border-3 mt-2 mb-4' />
                    <form className='form-content d-flex flex-column gap-3'>
                        <label htmlFor="name" className="visually-hidden">Nom</label>
                        <input type="text" id="name" className="form-control" placeholder="Votre nom" />

                        <label htmlFor="email" className="visually-hidden">Adresse email</label>
                        <input type="email" id="email" className="form-control" placeholder="Votre adresse email" />

                        <label htmlFor="phone" className="visually-hidden">Numéro de téléphone</label>
                        <input type="tel" id="phone" className="form-control" placeholder="Votre numéro de téléphone" />

                        <label htmlFor="subject" className="visually-hidden">Sujet</label>
                        <input type="text" id="subject" className="form-control" placeholder="Sujet" />

                        <label htmlFor="message" className="visually-hidden">Message</label>
                        <textarea id="message" className="form-control" rows="5" placeholder="Votre message"></textarea>

                        <div className='form-submit d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
