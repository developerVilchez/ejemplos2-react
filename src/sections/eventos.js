import React from 'react';

// Indicar que el tema de los eventos en react hace que sean compatibles en todos los navegadores
// El segundo tema con los eventos es enlazar al contexto correspondiente

class Contact2 extends React.Component {

 constructor(){
  super()
  this.state = {
   mouseX : 0,
   mouseY : 0
  }
  //this.handleMouseMove =  this.handleMouseMove.bind(this);
 }
 
 handleClick (e) {
  console.log(e)
  console.log(e.nativeEvent)
  alert('Hi there')
 }

/*  handleMouseMove(e) {
  this.setState({
   mouseX : e.clientX,
   mouseY : e.clientY
  })
 } */

 // Hacemos lo mismo con una arrow function
 handleMouseMove = (e) => {
  this.setState({
   mouseX : e.clientX,
   mouseY : e.clientY
  })
 }

 /* En este primer momento el contexto en que se ejecuta la función no es el correcto, creemos que se 
 ejecuta en el contexto del componente y que podremos actualizar el state pero al escuchar el evento ese no
 es el contexto, por lo tanto nos tenemos que asegurar que el contexto es el correspondiente al componente*/

/*  handleMouseMove (e) {
  console.log('el valor de x es ' + e.clientX)
  console.log('el valor de y es' +  e.clientY)
  this.setState({
   mouseX : e.clientX,
   mouseY : e.clientY
  })
 } */

 render(){
  return (
   <div>
    <h4>Eventos</h4>
    <button onClick = {this.handleClick}>Dame click</button>
     <div 
      onMouseMove = {this.handleMouseMove}
      style={{outline:'1px solid red', marginTop: 10, padding:10, width:'50%'}}>
      <p>{this.state.mouseX}, {this.state.mouseY}</p>
     </div>
   </div>
  )
 }
}


/* class Contact2 extends React.Component {
 render(){ 
  return (
   <div>
    <h4>Eventos</h4>
    <button onClick={()=>{alert('hola mundo')}}>Dame click</button>
   </div>
  )
 }
}
 */
export default Contact2