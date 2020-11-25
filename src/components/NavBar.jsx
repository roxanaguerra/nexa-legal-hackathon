import React from 'react';
import { Link } from 'react-router-dom';

//** Importación de elemetos */
import iconCapacitacion from '../assets/images/icon-training.png';
import iconAcompañamiento from '../assets/images/icon-accompaniment.png';
import iconPlanAccion from '../assets/images/icon-plan.png';

const NavBar = ({setSupervision, supervision}) => {
    return(
        <div className="nav-bar nav-bar-bottom">
            <Link to="/capacitacion">
                <div className="nav-bar-item">
                    <img className="icon" src={iconCapacitacion} alt="capacitacion" />
                    <p className="title-nav-bar item-active">Capacitación</p>
                </div>
            </Link>    
            
            <Link to="/acompañamiento">
                <div className='nav-bar-item'>
                    <img className="icon" src={iconAcompañamiento} alt="acompañamiento" />
                    <p className="title-nav-bar">Acompañamiento</p>
                </div>
            </Link>
            <Link to="/accion">
                <div className="nav-bar-item">
                    <img className="icon" src={iconPlanAccion} alt="planAccion" />
                    <p className="title-nav-bar">Plan de acción</p>
                </div>
            </Link>
        </div>    
    )
};

export default NavBar;