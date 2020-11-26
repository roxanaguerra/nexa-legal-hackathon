import React from 'react';

const ModalConfirmation = ({modal, closeModal}) => {
    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    
    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    {/* <button onClick={closeModal} className="close-modal">
                        <i class="fas fa-times"></i>
                    </button> */}
                    <p>Guardado en Colección</p>
                </section>                
            </div>
        </>        
    )
}

export default ModalConfirmation;