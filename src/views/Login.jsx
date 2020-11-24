import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import firebase from '../controller/main';

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
    <div className="container">
        <input type="email" className="" placeholder="Correo" required value={email} onChange={handleChange} />
        <input type="password" className="" placeholder="Contraseña" required value={password} onChange={handleChanged} />
        <button className="" onClick={send} type="submit">Ingresar</button>
    </div>

  );
};
export default Login;
