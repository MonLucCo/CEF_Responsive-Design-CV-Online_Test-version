// scrollUtils.js

// Fonction pour faire défiler la page jusqu'à la section "À propos" avec recalage des Top-offsets
export function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    const aboutOffsetTop = parseFloat(window.getComputedStyle(aboutSection).marginTop);
    const homeSection = document.getElementById('home');
    const homeOffsetTop = parseFloat(window.getComputedStyle(homeSection).marginTop);
    if (aboutSection) {
        window.scrollTo({
            top: aboutSection.offsetTop - aboutOffsetTop - homeOffsetTop,
            behavior: 'smooth'
        });
    }
}
