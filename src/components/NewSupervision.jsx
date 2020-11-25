import React, {useState} from 'react';


 const NewSupervision = () =>{
    const [unit, setUnit] = useState("")
    const [typeSup, setTypeSup] = useState("")
    const [takeSample, setTakeSample] = useState("")
    const [operArea, setOperArea] = useState("")

    // const handleChange = (e)=>{
    //    console.log( {value: e.target.value});
    // }
    const handleUnit = (e)=> e.currentTarget.value;   
    const handleTypeSup = (e)=>e.currentTarget.value;
    const handleTakeSample = (e)=>e.currentTarget.value;
    const handleOperArea = (e)=>e.currentTarget.value;

    return (
        <>
            
            <div className="container-newSupervision">  
                <form action=""className="form-newSupervision">
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
                <select value={takeSample} onChange={handleTakeSample} required >
                    <option value="tomaMuestras">Toma de muestras</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>
                <select value={operArea} onChange={handleOperArea} required >
                    <option value="areaOpetativa">Área Operativa</option>
                    <option value="mina">Mina</option>
                    <option value="concentradora">Concentradora</option>
                </select>
                <input type="text" placeholder="Observaciones" required />
                <button>REGISTRAR SUPERVISIÓN</button>
                
                </form> 
            </div>
        </>
    )
}

export default NewSupervision;
