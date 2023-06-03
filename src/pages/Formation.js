import React, { useState } from "react";
import { Fade } from "react-reveal";
import Study from "../Components/Study";

function Formation(props) {
    const [studies, setStudies] = useState([
        {
            field: "Cycle Ingenieur",
            school: "Polytech Angers",
            year: "2022-2024",
            snippet:
                "Qualité Logicielle | Surete de fonctionnement | Analyse des Risques | Data Science.",
        },
        {
            field: "Cycle Ingenieur",
            school: "National School of Applied Science",
            year: "2020-2024",
            snippet:
                "Programmation Objet | Programmation Web | Systeme d’Exploitation | Reseau | Base de donnees.",
        },
        {
            field: "Cycle Preparatoire",
            school: "National School of Applied Science",
            year: "2018-2020",
            snippet: "Programation Modulaire | Algorithmique.",
        },
        {
            field: "L1 Gestion",
            school: "Institut National de Sciences Comptable et Administration d'Entreprise Madagascar",
            year: "2017-2018",
            snippet:
                "Comptabilite | Marketing | Droits | Organisation d’Entreprise.",
        },
    ]);

    const [traineeShip, setTraineeShip] = useState([
         {
            field: "Software Development Testing Engineering",
            school: "Open Groupe (France)",
            year: "Mai 2023 à Aout 2023",
            snippet:
                "Relaisation de script d'automatisation de test et d'anonymisation de donnée pour la recette",
        },
        {
            field: "Web Development",
            school: "Storeino (Maroc)",
            year: "Mars 2022 à Juillet 2022",
            snippet:
                "Stage sur le developpement d'un produit ( Template de Site Ecommerce ) pour l'entreprise afin de pouvoir le proposer au client",
        },
        {
            field: "Web Development",
            school: "MoussaSoft Enterprise (Maroc)",
            year: "Ete 2021",
            snippet:
                "Stage sur le CMS Wordpress avec le plugin Woocommerce afin d'ajouter une nouvelle fonctionnalite pour le site",
        },
    ]);

    return (
        <div className="formation-container" id="formation">
            <div className="study-container">
                <h3 className="title">Education</h3>
                {studies.map((study) => (
                    <Study study={study} />
                ))}
            </div>
            <div className="traineeship-container">
                <h3 className="title">InternShip</h3>
                {traineeShip.map((study) => (
                    <Study study={study} />
                ))}
            </div>
        </div>
    );
}

export default Formation;
