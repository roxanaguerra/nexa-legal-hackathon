import React, { useState } from 'react';
import { Form } from "react-bootstrap";

const CreateActionPlan = ({infoSupervision}) => {

    const [findings, setFindings] = useState({ confirmation: "" });

    const handleInputChange = (e) => {
        // setFindings()
        const { name, value } = e.target;
        setFindings({ ...findings, [name]: value });
        console.log(setFindings.confirmation);
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
            </div>
        </>
    );
};

export default CreateActionPlan;