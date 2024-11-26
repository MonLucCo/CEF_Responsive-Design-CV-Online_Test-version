// data.js

// Données des réalisations
const projectsData = [
    {
        imageName: "fresh-food.jpg",
        title: "Fresh food",
        description: "Réalisation d'un site avec commande en ligne.",
        link: "https://example.com/fresh-food/index.html",
        tools: "avec PHP et MySQL"
    },
    {
        imageName: "restaurant-japonais.jpg",
        title: "Restaurant Akira",
        description: "Réalisation d'un site vitrine.",
        link: "https://example.com/restaurant-akira/index.html",
        tools: "avec WordPress"
    },
    {
        imageName: "espace-bien-etre.jpg",
        title: "Espace bien-être",
        description: "Réalisation d'un site vitrine pour un praticien de bien-être.",
        link: "https://example.com/espace-bien-etre/index.html",
        tools: "en HTML/CSS"
    }
];

// Données des compétences (avec les niveaux et les couleurs Bootstrap correspondantes)
const skillsData = [
    { name: 'html5', level: '90%', color: 'bg-danger' },
    { name: 'css3', level: '80%', color: 'bg-info' },
    { name: 'JavaScript', level: '70%', color: 'bg-warning' },
    { name: 'php', level: '60%', color: 'bg-success' },
    { name: 'React', level: '50%', color: 'bg-primary' }
];

export { projectsData, skillsData };
