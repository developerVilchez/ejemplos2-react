import React from 'react';

// Componentes controlados en react
/* En html, los elementos de formulario <input>, <textarea>, and <select> tipicamente
mantienen su propio estado y se actualizan en función al input del usuario
En React la mutación del estado se mantiene en la propiedad state del componente y solo se 
actualiza con setState()
Podemos combinar los dos haciendo que el estado de React sea el “single source of truth”
Luego el componente de React también controla lo que sucede en el formulario en la posterior entrada
de información del usuario
Un elemento input de formulario cuyo valor es controlado por react de esta manera es llamado un 
"componente controlado"
*/
const MuestraData = (props) => {
 return (<div style = {{outline:'1px solid blue', padding:10}}>{props.datos}</div>)
}



class NameForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = {value: ''};
  //Se tienen que generar un bind dde handle para cada elemento del form
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
  //Cada vez que se escuche el evento se hará un cambio en el estado
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   alert('A name was submitted: ' + this.state.value);
   event.preventDefault();
 }

 render() {
   return (
    <div>
     <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
      <MuestraData datos = {this.state.value}/>
     </div>
   );
 }
}

export default NameForm