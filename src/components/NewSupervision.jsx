import React, { useState } from 'react';
import firestore from '../controller/firestore';

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
        <>
            <div className="container-newSupervision">  
                <form action=""className="form-accompaniment">
                    <h3>Ingresar datos de la supervisión:</h3>
                    <select name="unidad" onChange={handleInputChange} value={newSupervision.unidad} required >
                        <option value="selecciona">Selecciona Unidad</option>
                        <option value="atocha">Atacocha</option>
                        <option value="elporvenir">El Porvenir</option>
                        <option value="cerrolindo">Cerro Lindo</option>
                        <option value="cajamarquilla">Cajamarquilla</option>
                    </select>
                    <select name="typeSupervision" onChange={handleInputChange} value={newSupervision.typeSupervision} required >
                        <option value="tipoSupervision">Selecciona tipo de supervisión</option>
                        <option value="regular">Regular</option>
                        <option value="especial">Especial</option>
                    </select>
                    <input type="date" placeholder="Fecha de Inicio" onChange={handleInputChange} name="startDate" value={newSupervision.startDate} required />
                    <input type="date" placeholder="Fecha de Fin" onChange={handleInputChange} name="expirationDate" value={newSupervision.expirationDate} required />
                    <input type="text" placeholder="Objetivo" onChange={handleInputChange} name="objective" value={newSupervision.objective} required />
                    <input type="text" placeholder="Lider" onChange={handleInputChange} name="leader" value={newSupervision.leader} required />
                    <input type="text" placeholder="Alterno" onChange={handleInputChange} name="alternate" value={newSupervision.alternate} required />
                    <select name="probing" onChange={handleInputChange} value={newSupervision.probing} required >
                        <option value="tipoSupervision">Toma de muestras</option>
                        <option value="regular">Si</option>
                        <option value="especial">No</option>
                    </select>
                    <select name="operationalArea" onChange={handleInputChange} value={newSupervision.operationalArea} required >
                        <option value="tipoSupervision">Área Operativa</option>
                        <option value="regular">Si</option>
                        <option value="especial">No</option>
                    </select>
                    <input type="text" placeholder="Observaciones" onChange={handleInputChange} name="observations" value={newSupervision.observations} required />
                    <button className="" type="button" onClick={handleRegisterSupervision}>REGISTRAR SUPERVISION</button>           
                </form>
            {
                confirmationSend ? 
                <div className="confirmation">
                    Guardado en Colección
                </div>
                : null
            }
            </div>
        </>
    )
}

export default NewSupervision;
