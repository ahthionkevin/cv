import React from "react";

function Study({ study }) {
    return (
        <div className="study-item-container">
            <h3>
                {study.field} - <span className="school">{study.school}</span>
            </h3>
            <p className="year">{study.year}</p>
            <p className="snippet">{study.snippet}</p>
        </div>
    );
}

export default Study;
