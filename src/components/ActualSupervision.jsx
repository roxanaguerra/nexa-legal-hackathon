import React, { useState } from 'react';
import { storage } from '../controller/main';
// import React, { useState } from 'react';
// import { storage } from '../controller/main';
import Subtitle from './Subtitle';
import UploadImage from './UploadImage';


const ActualSupervision = ({infoSupervision}) => {

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        const uploadTask = storage.ref(`/images/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
                setFile(null);
                setURL(url);
            });
        });
    }

    console.log('info: ', infoSupervision);
    return (
        <>
            <Subtitle text="Sube la documentación" />
            
            {/* <>
                { !url ? (
                    <form onSubmit={handleUpload}>
                        <div className="file-container">
                            <div className="btn-file-container">
                                <i className="fas fa-cloud-upload-alt"></i>
                                <p className="btn-file-text">Credenciales supervisor</p>
                                <input type="file" className="btn_enviar" onChange={handleChange}/>
                            </div>

                            <button disabled={!file} className="btn-secondary">Subir</button>
                        </div>
                    </form>    
                )        
                :
                <div className="file-container">
                    <img src={url} alt={url} />
                </div>
                }
            </> */}

            <div className="info-supervision-container">
                <div className="images-container">
                    <UploadImage 
                        file={file}
                        setFile={setFile}
                        url={url}
                        setURL={setURL}
                        handleChange={handleChange}
                        handleUpload={handleUpload}
                    />
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