import React from "react";

function Project(props) {
    return (
        <div className="project-container">
            <div className="image-container">
                <a href={props.url} target="_blank">
                    <img className="image" src={props.src} />
                </a>
            </div>
            <div className="project-description">
                <h3>{props.titre}</h3>
                {props.children}
            </div>
        </div>
    );
}

export default Project;
