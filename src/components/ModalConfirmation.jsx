import React from 'react';

const ModalConfirmation = ({ modal }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <i className="far fa-check-circle icon-confirmation"></i>
                    <p className="modal-text-center">¡Nueva supervisión registrada!</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalConfirmation;