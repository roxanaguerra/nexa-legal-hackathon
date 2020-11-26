import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
// import UploadImage from '../components/UploadImage';
import NewActionPlan from '../components/NewActionPlan';

const ActionPlan = () => {
    return(
        <>
            <Header name="PLAN DE ACCIÓN" />
            <Subtitle text="Gestiona tareas y crea soluciones" />
            <NewActionPlan />
            <NavBar />
        </>
    )
};

export default ActionPlan;