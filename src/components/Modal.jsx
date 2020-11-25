import React from 'react'

 const Modal = ({modal, closeModal}) => {
    return (
        <div className="container-modal"
            style={
                {opacity: modal ? '1': 0}
            }
        >
            <p>este es la respuesta</p>
            <button onClick={closeModal}>Cerrar</button>
        </div>
    )
}


export default Modal;