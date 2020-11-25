import React from 'react';


 const Modal = ({modal, closeModal, a, setModal}) => {
    return (
        <>
        {modal ? 
            
            <div className="container-modal" style={ {opacity: modal ? '1': 0}}>
                <p>{console.log(a.textAnswer) }</p>
                <button onClick={() => setModal(prev => !prev)}>Cerrar</button>
            </div>
            :
            null
        }
         </>
        
    )
}


export default Modal;