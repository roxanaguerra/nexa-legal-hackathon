import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import firestore from '../controller/firestore';
import NewActionPlan from '../components/NewActionPlan';
import ModalConfirmationAction from '../components/ModalAction';

const CreateActionPlan = ({infoSupervision}) => {

    const [findings, setFindings] = useState({ confirmation: "" });

    const [confirmationSend, setConfirmationSend] = useState(false);
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

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
        setConfirmationSend(true);
        openModal();
        setTimeout(() => {     
            // setConfirmationSend(false);
            window.location.reload();
        }, 2000);
    };

    return (
        <>
            <div className="info-supervision-total">
                <Form className="form-container-action-plan">
                    <p className="orange-text">Fecha de Inicio: {infoSupervision.startDate}</p>
                    <p className="orange-text">Fecha de Cierre: {infoSupervision.expirationDate}</p>
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
                        <button className="btn-primary-custom" onClick={finalizeActionPlan('NO REQUIERE')}>FINALIZAR</button>
                }
                {
                    confirmationSend ?
                        <ModalConfirmationAction modal={modal} />
                    : null
                }

            </div>
        </>
    );
};

export default CreateActionPlan;