import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import firestore from '../controller/firestore';
// Importar componentes según estado
import NewSupervision from '../components/NewSupervision';
import ListSupervision from '../components/ListSupervision';

const Accompaniment = () => {
    
    const [supervision, setSupervision] = useState (true);
    const [dataSupervision, setDataSupervision] = useState([]);
    const [stateSupervision, setStateSupervision] = useState('proceso');

    useEffect(() => {
        firestore.getSupervision(stateSupervision, (supervisionList) => {
            setDataSupervision(supervisionList);
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
                        <Header name="Acompañamiento" />
                        {
                            dataSupervision.map((sup) => (
                                <ListSupervision key={sup.id} setSupervision={setSupervision} dataSupervision={sup} />
                            ))
                        }
                        <button className="btn-secondary" onClick= {()=>{setSupervision(false)}}>NUEVA SUPERVISIÓN</button>
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