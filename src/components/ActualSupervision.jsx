import React, { useState } from 'react';
import { storage } from '../controller/main';

const ActualSupervision = ({infoSupervision}) => {

    console.log('info: ', infoSupervision);
    return (
        <>
            <div className="info-supervision">
                <p>Fecha de Inicio: {infoSupervision.startDate}</p>
                <p>Fecha de Cierre: {infoSupervision.expirationDate}</p>
                <p>Objetivo: {infoSupervision.objective}</p>
                <p>Lider: {infoSupervision.leader}</p>
                <p>Alterno: {infoSupervision.alternate}</p>
                <p>Toma de muestras: {infoSupervision.probing}</p>
                <p>Área Operativa: {infoSupervision.operationalArea}</p>
                <p>Observaciones: {infoSupervision.observations}</p>
                <p>Block de notas:</p>
                <textarea name="textarea" rows="3" cols="30"></textarea>
            </div>
        </>
    );
};

export default ActualSupervision;