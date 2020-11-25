import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import ActualSupervision from '../components/ActualSupervision';

const ActionPlan = () => {
    return(
        <>
            <Header name="Plan de acción" />
            <ActualSupervision />
            <NavBar />
        </>
    )
};

export default ActionPlan;