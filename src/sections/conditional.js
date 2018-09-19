import React from 'react';

class ComponenteA extends React.Component {
 render(){
  return <p>Componente A</p>
 }
}

class ComponenteB extends React.Component {
 render(){
  return <p>Componente B</p>
 }
}

//Usando una función y el valor del state como parámetro
const useConditionalRendering = (condition) => condition ? <ComponenteA /> : <ComponenteB />

export default class ConditionalSection extends React.Component {
 constructor(){
  super()
  this.state = {
   mostrarA : false
  }
 }
 render(){
 //Usando ternarias
 const conditionalRender = this.state.mostrarA ? <ComponenteA /> : <ComponenteB />
 return (
   <div>
    <h4>Conditional Rendering</h4>
    <ComponenteA />
    <ComponenteB />
    {useConditionalRendering(this.state.mostrarA)}
    {conditionalRender}
    {this.state.mostrarA ? <ComponenteA /> : <ComponenteB />}
   </div>
  )
 }
}