import React from 'react';

// Composant fonctionnel pour afficher les compétences
const Skills = ({ skills }) => {
    return (
        <>
            {skills.map((skill) => (
                <div key={skill.id} className="pt-2 pb-3">
                    {/* Titre de la compétence avec le niveau */}
                    <h3 className="text-start text-uppercase">{`${skill.name} ${skill.level}`}</h3>
                    <div className="progress">
                        {/* Barre de progression avec la couleur Bootstrap correspondante */}
                        <div
                            className={`progress-bar ${skill.color}`}
                            role="progressbar"
                            style={{ width: skill.level }}
                            aria-valuenow={parseInt(skill.level)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;
