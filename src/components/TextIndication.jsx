import React from 'react';

const TextIndication = ({ text, image }) => {
    return(
        <div className="indication-container">
            <img src={image} alt="Icon hoja" className="icon-indication"/>
            <p>{text}</p>
        </div>
    )
};

export default TextIndication;