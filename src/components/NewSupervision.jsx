import React, { useState } from 'react';
import firestore from '../controller/firestore';
import { Button, Form } from "react-bootstrap";
import Subtitle from '../components/Subtitle';

const NewSupervision = () =>{
    const initialStateSupervision = {
        unidad: '',
        typeSupervision: '',
        startDate: '',
        expirationDate: '',        
        objective: '',
        leader: '',
        alternate: '',
        probing: '',
        operationalArea: '',
        observations: '',
        stateSupervision: 'proceso',
    };

    const [newSupervision, setNewSupervision] = useState(initialStateSupervision);
    const [confirmationSend, setConfirmationSend] = useState(false);


    const addDocSupervision = (arraySupervision) => {
        firestore.addSupervision(arraySupervision);
        console.log(arraySupervision);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSupervision({ ...newSupervision, [name]: value });
    };

    // ADD NEW SUPERVISION
    const handleRegisterSupervision = (e) => {
        e.preventDefault();
        // console.log(order);
        addDocSupervision(newSupervision);
        setConfirmationSend(true);
        setTimeout(() => {
            setConfirmationSend(false)
        },3000);
        setNewSupervision({ ...initialStateSupervision });
    };

    return (
        <div className="newSupervision">
            <Subtitle text="Ingresa la información" />

            <div className="container-newSupervision">      
                <Form className="form-container">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="unidad" onChange={handleInputChange} value={newSupervision.unidad} required >
                            <option value="selecciona">Selecciona Unidad</option>
                            <option value="Atacocha">Atacocha</option>
                            <option value="El Porvenir">El Porvenir</option>
                            <option value="Cerro Lindo">Cerro Lindo</option>
                            <option value="Cajamarquilla">Cajamarquilla</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="typeSupervision" onChange={handleInputChange} value={newSupervision.typeSupervision} required >
                            <option value="tipoSupervision">Selecciona tipo de supervisión</option>
                            <option value="regular">Regular</option>
                            <option value="especial">Especial</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Fecha de Inicio</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de inicio" onChange={handleInputChange} name="startDate" value={newSupervision.startDate} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Fecha de Fin</Form.Label>
                        <Form.Control type="date"  placeholder="Fecha de Fin" onChange={handleInputChange} name="expirationDate" value={newSupervision.expirationDate} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Objetivo" onChange={handleInputChange} name="objective" value={newSupervision.objective} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Lider" onChange={handleInputChange} name="leader" value={newSupervision.leader} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Alterno" onChange={handleInputChange} name="alternate" value={newSupervision.alternate} required/>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="probing" onChange={handleInputChange} value={newSupervision.probing} required >
                            <option value="tipoSupervision">Toma de muestras</option>
                            <option value="regular">Si</option>
                            <option value="especial">No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="operationalArea" onChange={handleInputChange} value={newSupervision.operationalArea} required >
                            <option value="tipoSupervision">Área Operativa</option>
                            <option value="regular">Si</option>
                            <option value="especial">No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Observaciones" onChange={handleInputChange} name="observations" value={newSupervision.observations} required />
                    </Form.Group>

                    <Button className="btn-primary-custom" type="submit" onClick={handleRegisterSupervision} >
                        REGISTRAR SUPERVISIÓN
                    </Button>
                </Form>

                {
                    confirmationSend ? 
                    <div className="confirmation">
                        Guardado en Colección
                    </div>
                    : null
                }
            </div>
        </div>
    )
}

export default NewSupervision;
