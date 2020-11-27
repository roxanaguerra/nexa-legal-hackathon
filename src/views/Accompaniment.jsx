import React, { useState, useEffect } from 'react';
import firestore from '../controller/firestore';

// Importando componentes
import NavBarAcomp from '../components/NavBarAcomp';
import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import TextIndication from '../components/TextIndication';
import iconHoja from '../assets/images/icon-hoja.png';
import userPhoto from '../assets/images/user-photo.jpg';

// Importando componentes según estado
import NewSupervision from '../components/NewSupervision';
import ListSupervision from '../components/ListSupervision';
import ActualSupervision from '../components/ActualSupervision';

const Accompaniment = () => {
    
    const [supervision, setSupervision] = useState(true);
    const [seeSupervision, setSeeSupervision] = useState(false);
    const [dataSupervisions, setDataSupervisions] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('EN PROCESO');
    const [infoSupervision, setInfoSupervision] = useState({});

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervisions(supervisionList);
        });
    }, [stateSupervision]);

    return(
        <>
            <div>
                { supervision ? 
                    <>
                    { seeSupervision ?
                        <>
                            {/* VISTA SUPERVISIÓN ACTUAL */}

                            <button onClick={() => setSeeSupervision(false)} className="btn-back">
                                <i className="fas fa-arrow-left btn-back-i" ></i>
                            </button>

                            <Header name="Registrar Supervisión" />
                            <ActualSupervision infoSupervision={infoSupervision}/> 
                        </>
                    : 
                        <>
                            {/* VISTA INICIAL */}
                            
                            <img src={userPhoto} alt="Foto usuario" className="icon-user"/>
                            <Header name="ACOMPAÑAMIENTO" />
                            <Subtitle text="Registra las supervisiones" /> 

                            <div className="container-listCards-supervisions">
                                <TextIndication 
                                image={iconHoja}
                                text1="Sube la información y " 
                                text2="SUMA "
                                text3="rapidez en en los proceso de sistematización de NEXA." />

                                {
                                    dataSupervisions.length == 0 ?
                                        <div className="container-no-supervisions">
                                            <img src={iconHoja} alt="Ícono NEXA" className="icon-nexa"/>
                                            <p>Aún no tienes supervisiones registradas.</p>
                                        </div> 
                                :
                                <>
                                    <p className="fq">Lista de acompañamientos</p>

                                    {
                                        dataSupervisions.map((sup, index) => (
                                            <ListSupervision 
                                                key={'cardSup' + index} 
                                                setSeeSupervision={setSeeSupervision} 
                                                dataSupervisions={sup}
                                                setInfoSupervision={setInfoSupervision}
                                                type="Supervisión: " />
                                        ))
                                    }
                                </>
                                }

                                <button className="btn-primary-custom btn-margin-top" onClick= {()=>{setSupervision(false)}}>NUEVA SUPERVISIÓN</button>
                            </div>
                            <NavBarAcomp />
                        </>
                    }
                    </>
                : 
                    <>
                        <button onClick={() => setSupervision(true)} className="btn-back">
                            <i className="fas fa-arrow-left btn-back-i" ></i>
                        </button>
                        <Header name="Registrar Supervisión" />
                        <NewSupervision setSupervision={supervision} />
                    </>
                }
            </div>
        </>
    )
};

export default Accompaniment;