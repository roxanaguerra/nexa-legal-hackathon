import React from 'react';

const TextIndication = ({ text1, text2, text3, image }) => {
    return(
        <div className="indication-container">
            <img src={image} alt="Icon hoja" className="icon-indication"/>
            <p>{text1}<span className="fq">{text2}</span>{text3}</p>
        </div>
    )
};

export default TextIndication;