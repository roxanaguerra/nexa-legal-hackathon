import React from 'react';

const Modal = ({modal, closeModal, a, setModal}) => {
    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    
    return (
        <>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <button onClick={closeModal} className="close-modal">
                        <i className="fas fa-times"></i>
                    </button>
                    <h4>{a.textQ}</h4>
                    <p>{a.textAnswer}</p>
                </section>                
            </div>
        </>        
    )
}

export default Modal;