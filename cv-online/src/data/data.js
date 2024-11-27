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

// Données des publications
const blogPostsData = [
    {
        id: 1,
        imagePath: "blog/",
        imageName: "coder.jpg",
        title: "Coder son site en HTML/CSS",
        date: "22 août 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: ""
    },
    {
        id: 2,
        imagePath: "blog/",
        imageName: "croissance.jpg",
        title: "Vendre ses produits sur le web",
        date: "20 août 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: "https://example.com/Blog-John-Doe/vendre-ses-produits-sur-le-web"
    },
    {
        id: 3,
        imagePath: "blog/",
        imageName: "google.jpg",
        title: "Se positionner sur Google",
        date: "1 août 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: ""
    },
    {
        id: 4,
        imagePath: "blog/",
        imageName: "screens.jpg",
        title: "Coder en responsive design",
        date: "31 juillet 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: ""
    },
    {
        id: 5,
        imagePath: "blog/",
        imageName: "seo.jpg",
        title: "Techniques de référencement",
        date: "30 juillet 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: "https://example.com/Blog-John-Doe/Techniques-de-référencement.html"
    },
    {
        id: 6,
        imagePath: "blog/",
        imageName: "technos.png",
        title: "Apprendre à coder",
        date: "12 juillet 2022",
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        linkPost: ""
    }
];

export { projectsData, skillsData, blogPostsData };
