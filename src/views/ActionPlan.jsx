import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ActualSupervision from '../components/ActualSupervision';
import Subtitle from '../components/Subtitle';

const ActionPlan = () => {
    return(
        <>
            <Header name="PLAN DE ACCIÓN" />
            <Subtitle text="Gestiona tareas y crea soluciones" />
            <NavBar />
        </>
    )
};

export default ActionPlan;