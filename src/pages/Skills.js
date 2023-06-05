import React, { useState } from "react";
import LinearProgressBar from "../Components/LinearProgressBar";
import { CircularProgressbar } from "react-circular-progressbar";
import { LightSpeed, Reveal } from "react-reveal";
import "react-circular-progressbar/dist/styles.css";

function Skills(props) {
    const [techSkills, setTechSkills] = useState([
        {
            language: "Jira",
            known: 40,
        },
        {
            language: "Selenium",
            known: 50,
        },
        {
            language: "Cypress",
            known: 70,
        },
        {
            language: "Javascript",
            known: 70,
        },
        {
            language: "C/C++",
            known: 60,
        },
        {
            language: "Java",
            known: 55,
        },
        {
            language: "SQL",
            known: 50,
        },
        {
            language: "PHP",
            known: 20,
        },
        {
            language: "ReactJS",
            known: 65,
        },
        {
            language: "VueJS",
            known: 53,
        },
        {
            language: "NuxtJS",
            known: 45,
        },
        {
            language: "Python",
            known: 20,
        },
    ]);

    const [languages, setLanguages] = useState([
        {
            language: "French",
            known: 80,
        },
        {
            language: "English",
            known: 75,
        },
        {
            language: "Malagasy",
            known: 100,
        },
    ]);
    return (
        <div className="skills-container" id="skills">
            <LightSpeed top cascade>
                <div className="technical-skill-container">
                    <h3>Technical Skill</h3>
                    {techSkills.map((skill) => (
                        <div className="technical-skill-item">
                            <p>{skill.language}</p>
                            <div className="progress-bar">
                                <LinearProgressBar
                                    bgcolor="#99ccff"
                                    progress={skill.known}
                                    height={20}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </LightSpeed>
            <Reveal top cascade>
                <div className="language-skill-container">
                    <h3>Language</h3>
                    <div className="language-container">
                        {languages.map((language) => (
                            <div className="progress-bar">
                                <h4>{language.language}</h4>
                                <CircularProgressbar
                                    value={language.known}
                                    text={`${language.known} %`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </div>
    );
}

export default Skills;
