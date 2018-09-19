import React from 'react';
import ReactDOM from 'react-dom';
import SectionLogin from './App';

//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

const title = <h1>Hola Mundo</h1>

ReactDOM.render(title, document.getElementById('root'));
ReactDOM.render(<SectionLogin title = 'Hola mundo' texto = 'Bienvenido a react'/>, document.getElementById('root'))
registerServiceWorker();
