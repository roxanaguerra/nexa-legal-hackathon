import React, { useState } from 'react';

// Importando componentes
import NavBarTrain from '../components/NavBarTrain';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QuestionCard from '../components/QuestionCard';
import Subtitle from '../components/Subtitle';
import TextIndication from '../components/TextIndication';

// Importando elementos
import dataQ from '../assets/data/dataQuestion.json';
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
                <TextIndication 
                image={iconHoja}
                text="Aquí encontrás respuestas a las cuestiones más frecuentes durante una supervisión." />

                <p className="fq">Lista de preguntas frecuentes</p>

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
                                question={question}
                                modal={modal === 'answer'+ index}
                                closeModal={closeModal} 
                            />
                        </>
                    )
                })}  
            </div>   

            <NavBarTrain />
        </>
    )
};

export default Training;
