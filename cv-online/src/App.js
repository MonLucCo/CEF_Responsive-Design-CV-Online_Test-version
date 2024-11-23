import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles/base/App.scss';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
}

const Main = () => {
  const location = useLocation();

  useEffect(() => {
    // Sélection des éléments du DOM nécessaires
    const scrollTopButton = document.querySelector('.scroll-top');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fonction pour afficher ou masquer le bouton de retour en haut en fonction du défilement
    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollTopButton.classList.remove('d-none');
      } else {
        scrollTopButton.classList.add('d-none');
      }
    };

    // Fonction pour fermer la barre de navigation lors du clic sur un lien de navigation
    const closeNavbar = (event) => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const targetPath = event.currentTarget.getAttribute('href');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
      if (location.pathname !== targetPath) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Ajout des écouteurs d'événements
    document.addEventListener('scroll', handleScroll);

    navLinks.forEach(link => {
      link.addEventListener('click', closeNavbar);
    });

    // Ajout de l'écouteur d'événement pour le bouton de retour en haut
    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Nettoyage des écouteurs d'événements lors du démontage du composant
    return () => {
      document.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => { link.removeEventListener('click', closeNavbar); });
    };
  }, [location.pathname]); // Ajout de location.pathname comme dépendance

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
