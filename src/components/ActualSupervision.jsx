import React from 'react';
// import React, { useState } from 'react';
// import { storage } from '../controller/main';
import Subtitle from './Subtitle';
import UploadImage from './UploadImage';


const ActualSupervision = ({infoSupervision}) => {

    console.log('info: ', infoSupervision);
    return (
        <>
            <Subtitle text="Sube la documentación" />

            <div className="info-supervision-container">
                <div className="images-container">
                    <UploadImage />
                    {/* <UploadImage />
                    <UploadImage />
                    <UploadImage /> */}
                </div>

                <div className="info-supervision">
                    <div className="data-flex-column">
                        <p className="title-data-supervision">Datos relevantes:</p>
                        <textarea name="textarea" rows="3" cols="40" placeholder="Anota la información importante de la supervisión">
                        </textarea>
                    </div>

                    <div className="data-flex-row">
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Fecha de Inicio:</p>
                            <p>{infoSupervision.startDate}</p>
                        </div>
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Fecha de Cierre:</p>
                            <p>{infoSupervision.expirationDate}</p>
                        </div>
                    </div>
                    
                    <div className="data-flex-column">
                        <p className="title-data-supervision">Objetivo:</p>
                        <p>{infoSupervision.objective}</p>
                    </div>

                    <div className="data-flex-row">
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Lider:</p>
                            <p>{infoSupervision.leader}</p>
                        </div>
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Alterno:</p>
                            <p>{infoSupervision.alternate}</p>
                        </div>
                    </div>

                    <div className="data-flex-row">
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Toma de muestras:</p>
                            <p>{infoSupervision.probing}</p>
                        </div>
                        <div className="row-child-containter">
                            <p className="title-data-supervision">Área Operativa:</p>
                            <p>{infoSupervision.operationalArea}</p>
                        </div>
                    </div>

                    <div className="data-flex-column">
                        <p className="title-data-supervision">Observaciones iniciales:</p>
                        <p>{infoSupervision.observations}</p>
                    </div>

                    <button className="btn-primary-custom" type="submit" onClick="" >
                        GENERAL PLAN DE ACCIÓN
                    </button>
                </div>
            </div>
        </>
    );
};

export default ActualSupervision;