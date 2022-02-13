import React, { useState } from "react";
import { MdDownload } from "react-icons/md";
import { Slide } from "react-reveal";
import cv from "../Assets/cv.pdf";

function About(props) {
    const [techList, setTechList] = useState([
        "html",
        "css",
        "javascript",
        "sql",
        "c++",
        "java",
        "reactJS",
        "nodeJS",
        "VueJS",
        "NuxtJS",
        "ExpressJS",
        "MongoDB",
        "reactNative",
    ]);
    return (
        <div className="about-container" id="about">
            <div className="about-image-container">
                <img
                    className="dev-image"
                    src="https://www.designer-daily.com/wp-content/uploads/2020/03/web-dev-business.jpg"
                    alt="development image"
                    height={"450px"}
                />
            </div>
            <Slide top cascade>
                <div className="about-container-description">
                    <h2>About Me</h2>
                    <p>
                        Hi ! I am Lafferty from Madagascar, a student at
                        National School of Applied Science in the Fourth year in
                        Agadir.
                        <br />
                        <br />I have learn a lot of technology and I am good in:
                    </p>
                    <ul className="tech-list">
                        {techList.map((list) => (
                            <li>{list}</li>
                        ))}
                    </ul>
                    <div className="download-button">
                        <a href={cv} download>
                            Download CV {"  "} <MdDownload />
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    );
}

export default About;
