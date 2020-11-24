import React from 'react';
import { Link } from 'react-router-dom';
import iconCapacitacion from '../assets/capacitacion.png';
import iconAcompañamiento from '../assets/acompañamiento.png';
import iconPlanAccion from '../assets/accion.png';

const NavBar = () => {
    return(
        <div className="nav-bar nav-bar-bottom">
            <Link to="/capacitacion" className="item-bar">
                <img className="icon" src={iconCapacitacion} alt="capacitacion" />
                {/* <p>Capacitación</p> */}
            </Link>    
            
            <Link to="/acompañamiento">
                <img className="icon" src={iconAcompañamiento} alt="acompañamiento" />
                {/* <p>Acompañamiento</p> */}
            </Link>
            <Link to="/accion">
                <img className="icon" src={iconPlanAccion} alt="planAccion" />
                {/* <p>Plan de Acción</p> */}
            </Link>
            
        </div>    
    )
};

export default NavBar;