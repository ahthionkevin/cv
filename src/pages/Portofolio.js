import React from "react";
import Project from "../Components/Project";
import paysReact from "../Assets/paysReact.png";
import permaculture from "../Assets/permaculture.png";
import closMarshall from "../Assets/closMarshall.png";
import fireExtinguisher from "../Assets/fireExtinguisher.png";
import { Zoom } from "react-reveal";

function Portofolio(props) {
    return (
        <div className="portofolio-container" id="portofolio">
            <div className="title">
                <h3>Mon Portofolio</h3>
            </div>
            <Zoom>
                <Project
                    titre="React World"
                    url="https://pays-react-js.vercel.app/"
                    src={paysReact}
                >
                    <p>
                        React World est un site informatique qui permet de
                        lister tous les pays dans le monde avec leur Capitale,
                        le nombre d'Habitant et le Drapeau du pays.
                        <br />
                        On peut aussi faire un tri des pays par continent si on
                        le veut
                        <br />
                        <br />
                        Ce projet est developpe en ReactJS avec l'API{" "}
                        <a
                            href="https://restcountries.com/v3.1/all"
                            target="_blank"
                        >
                            https://restcountries.com/v3.1/all
                        </a>
                    </p>
                </Project>
            </Zoom>
            <Zoom>
                <Project
                    titre="Permaculture"
                    url="https://permaculture.netlify.app/"
                    src={permaculture}
                >
                    <p>
                        Clos Marshall est Site Hotelier destinee a une Maison
                        d'Hote afin de pouvoir faire la promotion de leur hotel
                        et de le faire connaitre au grand public
                    </p>
                </Project>
            </Zoom>
            <Zoom>
                <Project
                    titre="Clos Marshall"
                    url="https://ahthionkevin.github.io/"
                    src={closMarshall}
                >
                    <p>
                        Permaculture est un template de site informatique
                        statique fait a base de HTML, CSS et Javascript afin de
                        permettre au gens ce que c'est a permaculture.
                    </p>
                </Project>
            </Zoom>
            <Zoom>
                <Project
                    titre="Rent Your Fire Extinguisher"
                    url="https://rent-your-fire-extinguisher.netlify.app/"
                    src={fireExtinguisher}
                >
                    <p>
                        Rent Your Fire Extinguisher est un projet base sur
                        NuxtJs, qui permet d'aider les utilisateur de trouver
                        les Extincteurs les plus proches afin de combattre les
                        incendies avant meme l'arrive des pompiers
                    </p>
                </Project>
            </Zoom>
        </div>
    );
}

export default Portofolio;
