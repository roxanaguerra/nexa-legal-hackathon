import React from 'react';

const ModalFinSupervision = ({ modal }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <i className="far fa-check-circle icon-confirmation"></i>
                    <p className="modal-text-center">¡Supervisión finalizada, no olvides revisar el plan de acción!</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalFinSupervision;