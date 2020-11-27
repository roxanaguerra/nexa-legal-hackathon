import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firestore from '../controller/firestore';

// Importando componentes
import Subtitle from './Subtitle';
import UploadImage from './UploadImage';

const ActualSupervision = ({infoSupervision}) => {

    const history = useHistory();

    // Estados imágenes 
    const [fileCredentials, setFileCredentials] = useState(null);
    const [fileInfo, setFileInfo] = useState(null);
    const [fileActa, setFileActa] = useState(null);
    const [fileImages, setFileImages] = useState(null);
    const [urlCredentials, setUrlCredentials] = useState("");
    const [urlInfo, setUrlInfo] = useState("");
    const [urlActa, setUrlActa] = useState("");
    const [urlImages, setUrlImages] = useState("");
    
    const initialStateSupervision = {
        relevantData: '',
    };

    const [stateRelevantData, setStateRelevantData] = useState(initialStateSupervision);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStateRelevantData({ ...stateRelevantData, [name]: value });
        console.log(value);
    };

    const updateDataOfSupersion = (relevantData, stateSupervision, stateAction) => {
        firestore.updateDataOfSupersion(infoSupervision.id, relevantData, stateSupervision, stateAction);
    };

    const generateActionPlan = () => {
        updateDataOfSupersion(stateRelevantData.relevantData, 'FINALIZADA', 'PENDIENTE');
        history.push('/accion');
    }

    return (
        <>
            <Subtitle text="Sube la documentación" />
            
            <div className="images-container">
                <UploadImage 
                    categorie="Credenciales"
                    file={fileCredentials}
                    setFile={setFileCredentials}
                    url={urlCredentials}
                    setURL={setUrlCredentials}
                />   
                <UploadImage
                    categorie="Información"
                    file={fileInfo}
                    setFile={setFileInfo}
                    url={urlInfo}
                    setURL={setUrlInfo}
                />
                <UploadImage 
                    categorie="Acta cierre"
                    file={fileActa}
                    setFile={setFileActa}
                    url={urlActa}
                    setURL={setUrlActa}
                />
                <UploadImage
                    categorie="Fotos/videos"
                    file={fileImages}
                    setFile={setFileImages}
                    url={urlImages}
                    setURL={setUrlImages}
                />  
            </div>

            <div className="info-supervision-container">
                <div className="info-supervision">
                    <div className="data-flex-column">
                        <p className="title-data-supervision">Datos relevantes:</p>
                        <textarea name="relevantData" rows="3" cols="40" onChange={handleInputChange} value={stateRelevantData.relevantData} placeholder="Anota la información importante de la supervisión">
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

                    <button className="btn-primary-custom" type="submit" onClick={generateActionPlan} >
                        GENERAR PLAN DE ACCIÓN
                    </button>
                </div>
            </div>
        </>
    );
};

export default ActualSupervision;