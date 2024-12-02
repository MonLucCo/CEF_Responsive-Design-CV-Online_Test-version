import React, { useState, useEffect } from 'react';
import { loadData } from '../utils/dataLoader'; // Assure-toi que le chemin est correct

// Importation des styles
import '../assets/styles/pages/LegaNotice.scss';

// Importation des composants
import IntroPage from '../components/IntroPage';

// Importation des données des projets
import { CONSTANTS, DATA_PATHS } from '../config/config';

const LegalNotice = () => {
    const [openArticle, setOpenArticle] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const toggleArticle = (article) => {
        setOpenArticle(openArticle === article ? null : article);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await loadData(DATA_PATHS.localJsonData);
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const { contactData, legalMentions } = data;

    return (
        <section className='legal-notice-page'>
            <div className="page-content container d-flex flex-column justify-content-start align-items-start py-4">
                {/* Section d'introduction */}
                <IntroPage
                    title={CONSTANTS.legalNoticePageTitle}
                    description={CONSTANTS.legalNoticePageSubTitle}
                />
                {/* Section des mentions légales */}
                <section className="legal-notice-section card w-100">
                    {/* Section à compléter */}
                    <div className="accordion w-100" id="legalMentionsAccordion">
                        <article className="card">
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn custom-link" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded={openArticle === 'one'}
                                        aria-controls="collapseOne" onClick={() => toggleArticle('one')}>
                                        Éditeur du site
                                    </button>
                                </h2>
                                <i className={`fas ${openArticle === 'one' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </div>
                            <div id="collapseOne" className={`collapse ${openArticle === 'one' ? 'show' : ''}`}
                                aria-labelledby="headingOne" data-bs-parent="#legalMentionsAccordion">
                                <div className="card-body text-start">
                                    <p>Nom de l'éditeur : {contactData.name}</p>
                                    <p>Adresse : {`${contactData.address.rue}, ${contactData.address.codePostal} ${contactData.address.ville}, ${contactData.address.pays}`}</p>
                                    <p>Téléphone : {contactData.phone}</p>
                                    <p>Email : {contactData.email}</p>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link custom-link collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded={openArticle === 'two'}
                                        aria-controls="collapseTwo" onClick={() => toggleArticle('two')}>
                                        Hébergeur du site
                                    </button>
                                </h2>
                                <i className={`fas ${openArticle === 'two' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </div>
                            <div id="collapseTwo" className={`collapse ${openArticle === 'two' ? 'show' : ''}`}
                                aria-labelledby="headingTwo" data-bs-parent="#legalMentionsAccordion">
                                <div className="card-body text-start">
                                    <p>Nom de l'hébergeur : {legalMentions.host.name}</p>
                                    <p>Adresse : {legalMentions.host.address}</p>
                                    <p>Email : {legalMentions.host.email}</p>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <div className="card-header d-flex justify-content-between align-items-center" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link custom-link collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded={openArticle === 'three'}
                                        aria-controls="collapseThree" onClick={() => toggleArticle('three')}>
                                        Crédits
                                    </button>
                                </h2>
                                <i className={`fas ${openArticle === 'three' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </div>
                            <div id="collapseThree" className={`collapse ${openArticle === 'three' ? 'show' : ''}`}
                                aria-labelledby="headingThree" data-bs-parent="#legalMentionsAccordion">
                                <div className="card-body text-start">
                                    <p>Développement : {legalMentions.credits.development}</p>
                                    <p>Design : {legalMentions.credits.design}</p>
                                    <p>Images : {legalMentions.credits.images}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LegalNotice;
