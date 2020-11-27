import React from 'react';
import logo from '../assets/images/logo-nexa-suma.png';

const PageNotFound = () => (
  <div className="info-supervision-container">
    <h1>Página no encontrada</h1>
    <div>
      <img src={logo} alt="logo nexa" />
    </div>
    <span>Error 404</span>
  </div>
);

export default PageNotFound;