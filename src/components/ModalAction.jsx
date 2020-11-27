import React from 'react';

const ModalAction = ({ modal }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <i className="far fa-check-circle icon-confirmation"></i>
                    <p className="modal-text-center">¡Nuevo plan de acción registrado, no olvides hacerle seguimiento!</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalAction;