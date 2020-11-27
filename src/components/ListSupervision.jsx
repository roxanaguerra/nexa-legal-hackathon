import React from 'react'

const ListSupervision = ({ setSeeSupervision, dataSupervisions, setInfoSupervision, type }) => {

    const handleClickCard = () => {
        console.log('clickCard');
        setSeeSupervision(true);
        setInfoSupervision(dataSupervisions);
    };

    return (
        <div className="question-card" onClick={handleClickCard} >
            <div>
                <i className="fas fa-exclamation-circle" i="btn-acomp"></i>
            </div>

            <div className="list-cards-container">
                <p className="bold-text">{dataSupervisions.unidad} - Supervisión {dataSupervisions.typeSupervision}</p>
                <p>{dataSupervisions.startDate}</p>
                <p>{type} <span className="orange-text"> {dataSupervisions.stateSupervision}</span></p>
            </div>

            <i className="fas fa-chevron-right icon-right"></i>
        </div>
    )
}

export default ListSupervision;