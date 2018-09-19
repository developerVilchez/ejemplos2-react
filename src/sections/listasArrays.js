import React from 'react';

/* const Hobbies = () => (
                       <div>
                         <h1>Mi lista de Hobbies</h1>
                         <ul>
                           <li>Bailar</li>
                           <li>Cantar</li>
                           <li>Reir</li>
                           <li>Codeaar</li>
                         </ul>
                       </div>
                       )
 */


class ItemsHobbies extends React.Component {
 render(){
  const items = ['bailar','cantar','reir','codear']
  return <li>{items.join(',')}</li>
 }
}

class ItemsHobbies2 extends React.Component {
 render(){
  const items = ['bailar','cantar','reir','codear']
  //const li = items.map(item => <li>{item}</li>)
  return items.map((item,index) => <li key = {index}>{item}</li>)
 }
}

class ItemsHobbies3 extends React.Component {
 render(){
  const items = [1,1,2,3,4,5];
  //const li = items.map(item => <li>{item}</li>)
  return items.map((item,index) => <li key={item}>{item}</li>)
 }
}

const lista = ['react', 'angular', 'viu'].map(frame => <li>{frame}</li>)



class Hobbies extends React.Component {
 render(){
  return (
   <div>
     <h1>Mi lista de Hobbies</h1>
     <ul>
      <ItemsHobbies />
      <ItemsHobbies2 />
      <ItemsHobbies3 />
    </ul>
    <h2>Mis frameworks favoritos</h2>
     {lista}
   </div>
   )
 }
}

export default Hobbies