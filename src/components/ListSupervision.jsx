import React from 'react'

const ListSupervision = ({ setSeeSupervision, dataSupervision }) => {

    console.log('list: ', dataSupervision);

    return (
        <div className="list-cards" onClick={()=>{setSeeSupervision(true)}} >
            <div className="container-listCards-supervisions">
                <p>{dataSupervision.unidad} - Supervisión {dataSupervision.typeSupervision}</p>
                <p>{dataSupervision.startDate}</p>
                <p>{dataSupervision.stateSupervision} - Evaluar Plan de Acción</p>
            </div>
        </div>
    )
}

export default ListSupervision;