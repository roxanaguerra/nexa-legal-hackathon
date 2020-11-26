import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import firestore from '../controller/firestore';
import Subtitle from '../components/Subtitle';
import TextIndication from '../components/TextIndication';
import iconHoja from '../assets/images/icon-hoja.png'

// Importar componentes según estado
import NewSupervision from '../components/NewSupervision';
import ListSupervision from '../components/ListSupervision';
import ActualSupervision from '../components/ActualSupervision';

const Accompaniment = () => {
    
    const [supervision, setSupervision] = useState(true);
    const [seeSupervision, setSeeSupervision] = useState(false);
    const [dataSupervisions, setDataSupervisions] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('proceso');
    const [infoSupervision, setInfoSupervision] = useState({});

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervisions(supervisionList);
        //   console.log('supervisiones: ', supervisionList);
          // console.log('state2: ', stateOrder);
        });
    }, [stateSupervision]);

    // NAVBAR
    return(
        <>
            <div>
                { supervision ? 
                    <>
                    { seeSupervision ?
                        <>
                            <button onClick={() => setSeeSupervision(false)} className="btn-back">
                                <i className="fas fa-arrow-left btn-back-i" ></i>
                            </button>
                            <Header name="Registrar Supervisión" />
                            <ActualSupervision infoSupervision={infoSupervision}/> 
                        </>
                    : 
                        <>
                            <Header name="ACOMPAÑAMIENTO" />
                            <Subtitle text="Registra las supervisiones" /> {/* Sequeda vista inicial */}

                            <div className="container-listCards-supervisions">
                            <TextIndication 
                                image={iconHoja}
                                text="Sube la información y SUMA rapidez en en los proceso de sistematización de NEXA." />

                            <p className="fq">Lista de acompañamientos</p>

                                {
                                    dataSupervisions.map((sup, index) => (
                                        <ListSupervision key={'cardSup' + index} setSeeSupervision={setSeeSupervision} dataSupervisions={sup} setInfoSupervision={setInfoSupervision} />
                                    ))
                                }
                                <button className="btn-primary-custom" onClick= {()=>{setSupervision(false)}}>NUEVA SUPERVISIÓN</button>
                            </div>
                            <NavBar />
                        </>
                    }
                        
                    </>
                : <div className='new-supervision-container'>
                    <button onClick={() => setSupervision(true)} className="btn-back">
                        <i className="fas fa-arrow-left btn-back-i" ></i>
                    </button>
                    <Header name="Registrar Supervisión" />
                    <NewSupervision />
                </div>}
            </div>
        </>
    )
};

export default Accompaniment;