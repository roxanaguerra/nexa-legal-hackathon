import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import firestore from '../controller/firestore';
import NewActionPlan from '../components/NewActionPlan';

const CreateActionPlan = ({infoSupervision}) => {

    const [findings, setFindings] = useState({ confirmation: "" });

    const handleInputChange = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFindings({ [name]: value });
       
    };

    console.log(findings.confirmation);

    const updateStateAction = (stateAction) => {
        firestore.updateStateAction(infoSupervision.id, stateAction);
    };

    const finalizeActionPlan = (state) => {
        updateStateAction(state);
        setTimeout(() => {     
            // setConfirmationSend(false);
            window.location.reload();
        }, 2000);
    };

    return (
        <>
            <div className="info-supervision">
                <Form className="form-container">
                    <p>Fecha de Inicio: {infoSupervision.startDate}</p>
                    <p>Fecha de Cierre: {infoSupervision.expirationDate}</p>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="confirmation" onChange={handleInputChange} value={findings.confirmation} required >
                            <option value="">Se presentaron hallazgos</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                
                {   findings.confirmation ==="" ? null 
                    : 
                         findings.confirmation === "Si" ? 

                        <NewActionPlan dataSupervisions={infoSupervision} handleFinalizeActionPlan={finalizeActionPlan} />
                    :
                        <button onClick={finalizeActionPlan('NO REQUIERE')}>FINALIZAR</button>
                }

            </div>
        </>
    );
};

export default CreateActionPlan;