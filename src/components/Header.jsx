import React from 'react';

const Header = ({ name }) => {
    return(
        <header className="header-container">
            <h2>{name}</h2>
        </header>    
    )
};

export default Header;