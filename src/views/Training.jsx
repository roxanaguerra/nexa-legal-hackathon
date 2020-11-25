import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QuestionCard from '../components/QuestionCard';
import dataQ from '../data/dataQuestion.json';

const Training = () => {

    const [modal, setModal] = useState('');
    const closeModal = () => setModal(false);
    const openModal = (id) => setModal(id);

    return(
        <>
            <Header name="Capacitación" /> 
            
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
            <NavBar />
        </>
    )
};

export default Training;
