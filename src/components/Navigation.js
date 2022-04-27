//raccourci rsc
import React from 'react';
// permet de naviguer entre les différentes pages avec react
import { NavLink } from 'react-router-dom'; 

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                {/* Changement de class du menu lorsque la page est active */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navigation;