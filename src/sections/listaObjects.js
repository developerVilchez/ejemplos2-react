import React from 'react';
import cars from './data/cars.json'


// Indicar que las key es un valor interno para react

class CarItem extends React.Component {
 render(){
  const {car, id} = this.props;
  return (
   <li>
    <p><strong>Codigo : </strong>{id}</p>
    <p><strong>Compañia : </strong>{car.company}</p>
    <p><strong>Nombre : </strong>{car.name}</p>
  </li>
  )
 }
}


// Ahora lo puedo separar
class ListaCars extends React.Component {
 render(){
  return (
   <div>
    <h1> Lista de carros</h1>
    <ul>
     {
      cars.map(car => <CarItem car = {car} key = {car.id}  id = {car.id} />)
     }
     </ul>
   </div>
  )
 }
}




// Primera forma 
/* class ListaCars extends React.Component {
 render(){
  return (
   <div>
   <h1>Lista de carros</h1>
    <ul>
     {
      cars.map(car => (
        <li key = {car.id}>
         <p><strong>Compañia : </strong>{car.company}</p>
         <p><strong>Nombre : </strong>{car.name}</p>
        </li>
       )
      )
     }
   </ul>
   </div>
  )
 }
} */

export default ListaCars