// nous permet d'utiliser le JSX
import React from "react";
// sert  à connecter notre app au Dom
import ReactDom from 'react-dom/client';
// nous permet de d'utiliser les router
import {BrowserRouter} from 'react-router-dom';
// importe notre composants app
import App from './App';
import '../src/components/stylescss/global.css';

// crée une racine React dans notre html qui a l'ID root
const root = ReactDom.createRoot(document.getElementById('root'));
// affiche notre composants dans le Dom
root.render(
   <BrowserRouter>
    <App/>
   </BrowserRouter>
);
