import React from 'react';

const ModalConfirmation = ({ modal, text }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <i className="far fa-check-circle icon-confirmation"></i>
                    <p className="modal-text-center">{text}</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalConfirmation;