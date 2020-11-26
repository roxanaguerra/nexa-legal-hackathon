import React from 'react';

const Modal = ({modal, closeModal, a, setModal}) => {
    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    
    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <h4>{a.textQ}</h4>
                    <p>{a.textAnswer}</p>
                    <button onClick={closeModal}>Cerrar</button>
                </section>                
            </div>
        </>        
    )
}

export default Modal;