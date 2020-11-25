import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Modal from '../components/Modal';


const Training = () => {

    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    return(
        <>
            <Header name="Capacitación" />   
            <button className="card-question" onClick={() =>setModal(true)}>
             <p>esta es una pregunta?</p>
            </button>
             <Modal modal={modal} closeModal={closeModal} />
                  
            <NavBar />
        </>
    )
};

export default Training;
