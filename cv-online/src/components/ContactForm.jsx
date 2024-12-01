import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/; // Exemple pour un numéro de téléphone à 10 chiffres
        return regex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = {};

        // Vérification des champs obligatoires
        if (!formData.name) formErrors.name = 'Le nom est obligatoire';
        if (!formData.email) {
            formErrors.email = "L'adresse e-mail est obligatoire";
        } else if (!validateEmail(formData.email)) {
            formErrors.email = 'Veuillez entrer une adresse e-mail valide';
        }
        if (!formData.phone) {
            formErrors.phone = 'Le numéro de téléphone est obligatoire';
        } else if (!validatePhone(formData.phone)) {
            formErrors.phone = 'Veuillez entrer un numéro de téléphone valide';
        }
        if (!formData.subject) formErrors.subject = 'Le sujet est obligatoire';
        if (!formData.message) formErrors.message = 'Le message est obligatoire';

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            // Soumission du formulaire réussie
            setSuccessMessage('Votre message a été envoyé avec succès');
            setIsSubmitting(true);
            // Effacer le message de succès et réinitialiser le formulaire après un délai (2,5s)
            setTimeout(() => {
                setSuccessMessage('');
                setIsSubmitting(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }, 2500);
        }
    };

    return (
        <section className="contact-form col-md-6 p-0">
            <div className="card border-0">
                <div className="card-body">
                    <h2 className="card-title">Formulaire de contact</h2>
                    <hr className='separator text-primary text-opacity-100 border-3 mt-2 mb-4' />
                    <form className='form-content' onSubmit={handleSubmit}>
                        <fieldset className='fields-content d-flex flex-column gap-3'>
                            <legend className="visually-hidden">
                                Formulaire de contact pour envoyer un message à John Doe
                            </legend>
                            <div className="form-group">
                                <label htmlFor="name" className="visually-hidden">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Votre nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                                {errors.name && <div className="invalid-feedback text-center">{errors.name}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="visually-hidden">Adresse email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="Votre adresse email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                                {errors.email && <div className="invalid-feedback text-center">{errors.email}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone" className="visually-hidden">Numéro de téléphone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                    placeholder="Votre numéro de téléphone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                                {errors.phone && <div className="invalid-feedback text-center">{errors.phone}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject" className="visually-hidden">Sujet</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                    placeholder="Sujet"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                                {errors.subject && <div className="invalid-feedback text-center">{errors.subject}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="visually-hidden">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                    rows="5"
                                    placeholder="Votre message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                ></textarea>
                                {errors.message && <div className="invalid-feedback text-center">{errors.message}</div>}
                            </div>
                            <div className='form-submit d-flex justify-content-center'>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Envoyer
                                </button>
                            </div>
                        </fieldset>
                    </form>
                    {successMessage && <div className="text-success text-center mt-3">{successMessage}</div>}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
