import React from 'react'

// Esta no es la mejor manera de trabajarlo en react
class Form extends React.Component {
 handlerClick (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('twitter').value;
  console.log({name, email})
 }

 render(){
  return (
   <div>
    <h4>Formularios</h4>
    <form style = {{outline : '1px solid red', width:'50%', padding:20}}>
     <p>
      <label htmlFor = 'name'>Nombre:</label>
      <input 
       id = 'name'
       name = 'userName'
       placeholder = 'Introduce el nombre'
      />
     </p>
     <p>
     <label htmlFor = 'twitter'>Twitter:</label>
     <input 
      id = 'twitter'
      name = 'twitterAccount'
      placeholder = 'Introduce tu Twitter'
     />
    </p>
    <button onClick={this.handlerClick}>Enviar</button>
    </form>
   </div>
  )
 }
}
export default Form