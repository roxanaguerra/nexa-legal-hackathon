import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const Accompaniment = () => {

    const [unit, setUnit] = useState("")
    const [typeSup, setTypeSup] = useState("")

    // const handleChange = (e)=>{
    //    console.log( {value: e.target.value});
    // }
    const handleUnit = (e)=>{
       console.log( {value: e.target.value});
    }
    const handleTypeSup = (e)=>{
       console.log( {value: e.target.value});
    }



    return(
        <>
        <div className="container-accompaniment">
            <form action=""className="form-accompaniment">
            <h3>Ingresar datos de la supervisión:</h3>
            <select value={unit} onChange={handleUnit} required >
                <option value="selecciona">Selecciona Unidad</option>
                <option value="atocha">Atocha</option>
                <option value="elporvenir">El Porvenir</option>
                <option value="cerrolindo">Cerro Lindo</option>
                <option value="cajamarquilla">Cajamarquilla</option>
            </select>
            <select value={typeSup} onChange={handleTypeSup} required >
                <option value="tipoSupervision">Selecciona tipo de supervisión</option>
                <option value="regular">Regular</option>
                <option value="especial">Especial</option>
            </select>
            <input type="date" placeholder="Fecha de Inicio" required />
            <input type="date" placeholder="Fecha de Fin" required />
            <input type="text" placeholder="Objetivo" required />
            <input type="text" placeholder="Lider" required />
            <input type="text" placeholder="Alterno" required />
            <select value={typeSup} onChange={handleTypeSup} required >
                <option value="tipoSupervision">Toma de muestras</option>
                <option value="regular">Si</option>
                <option value="especial">No</option>
            </select>
            <select value={typeSup} onChange={handleTypeSup} required >
                <option value="tipoSupervision">Área Operativa</option>
                <option value="regular">Si</option>
                <option value="especial">No</option>
            </select>

            <input type="text" placeholder="Observaciones" required />
            
            

            </form>
            
        </div>    
            <NavBar />

        </>
    )
};

export default Accompaniment;