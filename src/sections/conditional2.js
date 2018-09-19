import React from 'react';

const LoginButon = () => <button>Iniciar Sesiin</button>;
const LogoutButton = () => (
                             <div>
                               <p>Bienvenido Usuario</p>
                               <button>Cerrar Sesión</button>
                             </div>
                             )
export default class Contact extends React.Component {
 constructor(){
  super();
  this.state = {
   isUserLogged : true
  }
 }
 render(){
  return (
   <div>
    <h4>Conditional Rendering caso practico</h4>
    {this.state.isUserLogged ? <LogoutButton/> : <LoginButon/>}
   </div>
  )
 }
}
  