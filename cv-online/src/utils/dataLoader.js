// dataLoader.js

/**
 * Fonction pour charger les données JSON depuis une URL spécifiée.
 * @param {string} url - L'URL du fichier JSON à charger.
 * @returns {Promise<Object>} - Une promesse qui résout les données JSON.
 * @throws {Error} - Lance une erreur si le chargement des données échoue.
 */

export const loadData = async (url) => {
    try {
        // Effectue une requête HTTP pour récupérer les données depuis l'URL spécifiée
        const response = await fetch(url);

        // Vérifie si la réponse est correcte (statut HTTP 200-299)
        if (!response.ok) {
            // Si la réponse n'est pas correcte, lance une erreur avec le statut HTTP
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        // Convertit la réponse en format JSON
        const data = await response.json();

        // Retourne les données JSON
        return data;
    } catch (error) {
        // Affiche une erreur dans la console si le chargement des données échoue
        console.error('Erreur de chargement des données:', error);

        // Relance l'erreur pour permettre une gestion ultérieure
        throw error;
    }
};
