import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import firebase from '../controller/main';

//** Importación de elemetos */
import logoNexa from '../img/logoNexa.jpg';


const Login = () => {
  //   const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const send = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      //   history.push('/home');
      console.log('logueado');
    });
    console.log(email, password);
  };


  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // console.log(email);
  };
  const handleChanged = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // console.log(password);
  };

  return (
    <div className="container-login">
      <div className="container-logo-form">
        <div className="logo-login">
          <img src={logoNexa} alt="logo nexa" />
        </div>
        <form action="" className="form-login">
          <label htmlFor="" >Correo electrónico</label>
          <input type="email" className="input-login" placeholder="Correo" value={email} onChange={handleChange}  required/>
          <label htmlFor="">Contraseña</label>
          <input type="password" className="input-login" placeholder="Contraseña" required value={password} onChange={handleChanged} />
          <p>¿Olvidaste tu contraseña?</p>
          <button className="" onClick={send} type="submit">INICIAR SESIÓN</button>
          <p>¿No tienes cuenta? Registrate</p>
        </form>
      </div>
    </div>

  );
};
export default Login;
