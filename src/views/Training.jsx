import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QuestionCard from '../components/QuestionCard';
import Subtitle from '../components/Subtitle';
import dataQ from '../data/dataQuestion.json';
import iconHoja from '../assets/images/icon-hoja.png'

const Training = () => {

    const [modal, setModal] = useState('');
    const closeModal = () => setModal(false);
    const openModal = (id) => setModal(id);

    return(
        <>
            <Header name="CAPACITACIÓN" /> 
            <Subtitle text="Conoce tus derechos y obligaciones" />

            <div className="card-question-container">
                <div className="indication-container">
                    <img src={iconHoja} alt="Icon hoja" className="icon-indication"/>
                    <p>Aquí encontrás respuestas a las cuestiones más frecuentes durante una supervisión.</p>
                </div>
                <p className="fq">Listado de preguntas frecuentes</p>

                {dataQ.questions.map((question,index)=>{
                    return (
                        <>  
                            <QuestionCard
                                key ={'q' + index}
                                question= {question}
                                openModal={() => openModal('answer'+ index)}
                            />

                            <Modal
                                key ={'answer'+ index}
                                a={question}
                                modal={modal === 'answer'+ index}
                                closeModal={closeModal} 
                            />
                        </>
                    )
                })}  
            </div>   

            <NavBar />
        </>
    )
};
export default Training;
