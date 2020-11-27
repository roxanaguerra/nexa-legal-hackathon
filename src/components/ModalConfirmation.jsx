import React from 'react';

const ModalConfirmation = ({ modal }) => {

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    {/* <button className="close-modal">
                        <i className="fas fa-times"></i>
                    </button> */}
                    <p>Guardado en Colección</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalConfirmation;