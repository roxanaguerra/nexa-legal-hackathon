import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Modal from '../components/Modal';
import QuestionCard from '../components/QuestionCard';
import dataQ from '../data/dataQuestion.json';

const Training = (props) => {

    // const [modal, setModal] = useState(false);

    // const closeModal = () => setModal(false);
    // const openModal = () => setModal(prev => !prev);


    return(
        <>
            <Header name="Capacitación" /> 
            
            {dataQ.questions.map((question,index)=>{
                return (
                    <>
                    {/* <div onClick={openModal}> */}
                        <QuestionCard
                            key ={'q'-index}
                            question= {question}
                            dataQ ={dataQ}
                            // openModal={openModal}
                        />
                    {/* </div> */}
                       
                        
                        <Modal
                        key ={'answer'-index}
                        a={question}
                        // modal={modal}
                        // setModal={setModal}
                        // closeModal={closeModal} 
                        />
                    </>
                    
                )
            })}
{/*             
            {dataQ.answers.map((a,index)=>(
                <Modal
                    key ={'answear'-index}
                    a={a}
                    modal={modal}
                    closeModal={closeModal} />
            ))} */}
             
                  
            <NavBar />
        </>
    )
};

export default Training;
