import React from 'react'

const ListSupervision = ({ setSeeSupervision, dataSupervisions, setInfoSupervision }) => {

    // console.log('list: ', dataSupervisions);
    const handleClickCard = () => {
        setSeeSupervision(true);
        setInfoSupervision(dataSupervisions);
    };

    return (
        <div className="list-cards" onClick={handleClickCard} >
            <div className="list-cards-container">
                <p>{dataSupervisions.unidad} - Supervisión {dataSupervisions.typeSupervision}</p>
                <p>{dataSupervisions.startDate}</p>
                <p>{dataSupervisions.stateSupervision} - Evaluar Plan de Acción</p>
            </div>
        </div>
    )
}

export default ListSupervision;