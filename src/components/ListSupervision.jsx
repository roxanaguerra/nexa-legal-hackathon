import React from 'react'

const ListSupervision = ({ setSupervision, supervision }) => {


    return (
        <div className="list-cards">
            <div className="container-listCards-supervisions">
                <p>Aún no tienes supervisiones registradas</p>
            </div>
                <button className="btn-secondary" onClick= {()=>{setSupervision(false)}}>NUEVA SUPERVISIÓN</button>
        </div>
    )
}

export default ListSupervision;