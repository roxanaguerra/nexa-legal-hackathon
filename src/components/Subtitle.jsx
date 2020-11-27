import React from 'react';

const Subtitle = ({ text, info }) => {
    return(
        <>
            <div className="subtitle">
                <h3>{text}  {info}</h3>
            </div>  
        </>
    )
};

export default Subtitle;