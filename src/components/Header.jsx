import React from 'react';
import { useHistory } from 'react-router-dom';
import userPhoto from '../assets/images/user-photo.jpg';

const Header = ({ name }) => {

    const history = useHistory();

    const profile = () => {
        history.push('/profile');
    }

    return(
        <header className="header-container">
            <h2>{name}</h2>
            <img src={userPhoto} alt="Foto usuario" className="icon-user" onClick={profile}/>
        </header>    
    )
};

export default Header;