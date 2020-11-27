import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import axios from 'axios';
import firestore from '../controller/firestore';

// Importando componentes
import Subtitle from '../components/Subtitle';
import ModalConfirmation from '../components/ModalConfirmation';
import userPhoto from '../assets/images/user-photo.jpg';

const NewSupervision = ({ setSupervision }) => {
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
        stateSupervision: 'EN PROCESO',
        stateAction: '',
        relevantData: '',
    };

    const [newSupervision, setNewSupervision] = useState(initialStateSupervision);
    const [confirmationSend, setConfirmationSend] = useState(false);

    const [modal, setModal] = useState(false);
    const openModal = () => setModal(true);

    const addDocSupervision = (arraySupervision) => {
        firestore.addSupervision(arraySupervision);
        // console.log(arraySupervision);
    };

    const sendEmail = (contenido )=>{
        axios.post(`https://us-central1-nexa-lh.cloudfunctions.net/sendMail`, { contenido })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSupervision({ ...newSupervision, [name]: value });
        console.log(value);
    };

    // Agregar nueva supervisión
    const handleRegisterSupervision = (e) => {
        e.preventDefault();
        sendEmail(newSupervision);
        addDocSupervision(newSupervision);
        // setSupervision(false);
        setConfirmationSend(true);
        openModal();
        setTimeout(() => {     
            setConfirmationSend(false);
            window.location.reload();
        }, 2000);
        setNewSupervision({ ...initialStateSupervision });
    };

    return (
        <div className="newSupervision">
            <img src={userPhoto} alt="Foto usuario" className="icon-user"/>
            
            <Subtitle text="Ingresa la información" />

            <div className="container-newSupervision">
                <Form className="form-container">
                    <Form.Group controlId="unit.ControlSelect">
                        <Form.Control as="select" name="unidad" onChange={handleInputChange} value={newSupervision.unidad} required >
                            <option value="selecciona">Selecciona Unidad</option>
                            <option value="Atacocha">Atacocha</option>
                            <option value="El Porvenir">El Porvenir</option>
                            <option value="Cerro Lindo">Cerro Lindo</option>
                            <option value="Cajamarquilla">Cajamarquilla</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="typeSupervision.ControlSelect1">
                        <Form.Control as="select" name="typeSupervision" onChange={handleInputChange} value={newSupervision.typeSupervision} required >
                            <option value="tipoSupervision">Selecciona tipo de supervisión</option>
                            <option value="Regular">Regular</option>
                            <option value="Especial">Especial</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Fecha de Inicio</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de inicio" onChange={handleInputChange} name="startDate" value={newSupervision.startDate} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Fecha de Fin</Form.Label>
                        <Form.Control type="date" placeholder="Fecha de Fin" onChange={handleInputChange} name="expirationDate" value={newSupervision.expirationDate} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicObjective">
                        <Form.Control type="text" placeholder="Objetivo" onChange={handleInputChange} name="objective" value={newSupervision.objective} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicLider">
                        <Form.Control type="text" placeholder="Lider" onChange={handleInputChange} name="leader" value={newSupervision.leader} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicAlterno">
                        <Form.Control type="text" placeholder="Alterno" onChange={handleInputChange} name="alternate" value={newSupervision.alternate} required />
                    </Form.Group>

                    <Form.Group controlId="probing.ControlSelect">
                        <Form.Control as="select" name="probing" onChange={handleInputChange} value={newSupervision.probing} required >
                            <option value="tipoSupervision">Toma de muestras</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="opetationalArea.ControlSelect">
                        <Form.Control as="select" name="operationalArea" onChange={handleInputChange} value={newSupervision.operationalArea} required >
                            <option value="tipoSupervision">Área Operativa</option>
                            <option value="Mina">Mina</option>
                            <option value="Planta concentradora">Planta concentradora</option>
                            <option value="Campamentos">Campamentos</option>
                            <option value="Almacén">Almacén</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="observations.ControlTextarea">
                        <Form.Control as="textarea" placeholder="Observaciones iniciales" rows={2} onChange={handleInputChange} name="observations" value={newSupervision.observations} required />
                    </Form.Group>

                    <Button className="btn-primary-custom" type="submit" onClick={handleRegisterSupervision} >
                        REGISTRAR SUPERVISIÓN
                    </Button>
                </Form>
                {
                    confirmationSend ?
                        <ModalConfirmation modal={modal} />
                    : null
                }
            </div>
        </div>
    )
}

export default NewSupervision;
