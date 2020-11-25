import React from 'react'

const ListSupervision = ({ setSupervision, dataSupervision }) => {

    console.log('list: ', dataSupervision);

    return (
        <div className="list-cards">
            <div className="container-listCards-supervisions">
                <p>{dataSupervision.objective} - Supervisión {dataSupervision.typeSupervision}</p>
                <p>{dataSupervision.startDate}</p>
                <p>{dataSupervision.stateSupervision} - Evaluar Plan de Acción</p>
            </div>
        </div>
    )
}

export default ListSupervision;