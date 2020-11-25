import React from 'react';

const Modal = ({modal, closeModal, a, setModal}) => {
    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    
    return (
        <>
            <div className={showHideClassName}>
                {/* <p>{console.log(a.textAnswer) }</p> */}
                <section className="modal-main">
                    <p>{a.textQ}</p>
                    <button onClick={closeModal}>Cerrar</button>
                </section>                
            </div>
        </>
        
    )
}

export default Modal;