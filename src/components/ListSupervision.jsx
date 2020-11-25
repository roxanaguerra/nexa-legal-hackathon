import React from 'react'

const ListSupervision = ({ setSupervision, supervision }) => {


    return (
        <>
            <div className="container-listCards-supervisions">
                <p>para cargar Lista de cards Supervisiones</p>
            </div>
                <button className="btn-primary" onClick= {()=>{setSupervision(false)}}>NUEVA SUPERVISIÓN</button>
            
        </>
    )
}

export default ListSupervision;