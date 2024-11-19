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
import './assets/styles/App.css';

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
    const scrollTopButton = document.querySelector('.scroll-top');
    const mainContent = document.querySelector('.main-content');
    const header = document.querySelector('header');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollTopButton.classList.remove('d-none');
      } else {
        scrollTopButton.classList.add('d-none');
      }
    };

    const setPaddingTop = () => {
      const headerHeight = header.offsetHeight;
      mainContent.style.paddingTop = `${headerHeight}px`;
    };

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

    document.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setPaddingTop);

    navLinks.forEach(link => {
      link.addEventListener('click', closeNavbar);
    });

    setPaddingTop();

    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    return () => {
      document.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setPaddingTop);
      navLinks.forEach(link => { link.removeEventListener('click', closeNavbar); });
    };
  }, []);

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
