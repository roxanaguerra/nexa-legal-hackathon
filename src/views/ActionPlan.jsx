import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import UploadImage from '../components/UploadImage';

const ActionPlan = () => {
    return(
        <>
            <Header name="Plan de acción" />
            <UploadImage />
            <NavBar />
        </>
    )
};

export default ActionPlan;