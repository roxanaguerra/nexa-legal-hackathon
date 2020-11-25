import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

// Importar componentes según estado
import NewSupervision from '../components/NewSupervision';
import ListSupervision from '../components/ListSupervision';

const Accompaniment = () => {
    
    const [supervision, setSupervision] = useState (true);

    return(
        <>
            <div>
                { supervision ? 
                    <>
                        <Header name="Acompañamiento" />
                        < ListSupervision supervision={supervision} setSupervision={setSupervision} />
                    </>
                : <>
                    <button onClick={() => setSupervision(true)} className="btn-back">
                        <i className="fas fa-arrow-left btn-back-i" ></i>
                    </button>
                    <Header name="Registrar Supervisión" />
                    <NewSupervision />
                </>}
            </div>

            <NavBar />
        </>
    )
};

export default Accompaniment;