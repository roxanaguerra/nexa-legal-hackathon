import React from 'react';
import {firebase} from '../controller/main';
import { useHistory } from 'react-router-dom';

//Importando componentes
import userPhoto from '../assets/images/user-photo.jpg'
import logoNexaSuma from '../assets/images/logo-nexa-suma.png'
import Header from '../components/Header';

const UserProfile = () => {

    const history = useHistory();

    // Cerrar Sesión
    const signOut = () => firebase.auth().signOut()
    .then(() => {
        localStorage.removeItem('username');
        console.log('Saliendo...!');
        history.push('/');
    })
    .catch(() => {
    // console.log(error);
    });

    return (
        <div className="container-userProfile">
            <Header name ="PERFIL"/>

            <button  className="btn-back">
                <i className="fas fa-arrow-left btn-back-i" ></i>
            </button>

            <div className ="userPhoto-userProfile">
                <img src={userPhoto}alt=""/>
            </div>  

            <div className="nameUser-userProfile">
                <p>DIANA MADRID GÓMEZ</p>
            </div>
            
            <>
                <p className="orange-text">Líder Unidad de Medio Ambiente</p>
                <p>nexa.ambiente.20@gmail.com</p>
            </>

            <div className="emailUser-userProfile"></div>

            <div className="logo-userProfile">
                <img src={logoNexaSuma}alt=""/>
            </div>

            <div className="links-userProfile">
                <p>Perfil de Usuario</p>
                <p>Notificaciones</p>
            </div>

            <div className="close-userProfile">
                <button onClick={signOut}>Cerrar Sesión</button>
            </div>
        </div>
    )
}





export default UserProfile;