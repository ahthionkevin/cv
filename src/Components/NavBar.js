import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

function NavBar(props) {
    const [anchors, setAnchors] = useState([
        "home",
        "about",
        "skills",
        "formation",
        "portofolio",
        "contact",
    ]);
    return (
        <nav>
            {anchors.map((anchor) => (
                <NavHashLink
                    smooth
                    to={`/#${anchor}`}
                    className="link"
                    activeClassName="selected"
                    // etc...
                >
                    {anchor[0].toUpperCase() + anchor.slice(1).toLowerCase()}
                </NavHashLink>
            ))}
        </nav>
    );
}

export default NavBar;
