import React from 'react';
import PropTypes from 'prop-types';
import ConditionalSection from './sections/conditional';
import Contact from './sections/conditional2';
import Hobbies from './sections/listasArrays';
import ListaCars  from './sections/listaObjects';
import Contact2 from './sections/eventos';
import Form from './sections/formularios1-no';
import NameForm from './formulario2-controlado';


/* class SectionLogin extends React.Component {
  render(){
    //Destructuring de objetos
    console.log(this.props)
   const {title, texto} = this.props
    return  (
      <div>
        <h1>{title}</h1>
        <p>{texto}</p>
      </div>
      )
  }
}  */

 /* const SectionLogin = (props) => {
  console.log(props)
  const {title, texto} = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{texto}</p>
    </div>
    )
}

export default SectionLogin  */

const Hello = (props) => <h2>{props.title}</h2>

class Hello2 extends React.Component {
  render(){
    return <h4>{this.props.name}</h4>
  }
} 

/*  class Text extends React.Component {
  render(){
    const textoSegunBoool = this.props.boolean ? 'Aparezco si soy verdad' : 'Aparezco si soy falso';
    //const duplicated = this.props.arraysOfNumber.map(ele => ele * 2).join(',')
    const duplicated = this.props.arraysOfNumber.map(this.props.multiply).join(',')
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{this.props.boolean}</p>
        <p>{textoSegunBoool}</p>
        <p>{this.props.arraysOfNumber}</p>
        <p>{duplicated}</p>
        <p>{this.props.objectWithInfo.key}</p>
    </div>
    )
  }
} 

Text.propTypes = {
  boolean : PropTypes.boolean,
  arraysOfNumber : PropTypes.array,
  multiply : PropTypes.func,


} */

// Destructurando el objeto this.props
class Text extends React.Component {
  render(){
    // Destructuring del Objeto this.props
    const {
      arraysOfNumber, 
      boolean, 
      multiply, 
      text, 
      title,
      number, 
      objectWithInfo
    } = this.props;

    // Los componentes en react deben son funciones puras y no modifican sus props
   // title = <h3>Hola como estas</h3>

    const textoSegunBoool = boolean ? 'Aparezco si soy verdad' : 'Aparezco si soy falso';
    //const duplicated = this.props.arraysOfNumber.map(ele => ele * 2).join(',')
    const duplicated = arraysOfNumber.map(multiply).join(',')
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{boolean}</p>
        <p>{textoSegunBoool}</p>
        <p>{arraysOfNumber}</p>
        <p>{duplicated}</p>
        <p>{objectWithInfo.key}</p>
        {title}
    </div>
    )
  }
} 

Text.propTypes = {
  boolean : PropTypes.boolean,
  arraysOfNumber : PropTypes.array,
  multiply : PropTypes.func,


}

class Text2 extends React.Component {
  render(){
    return <h4>{this.props.name}</h4>
  }
}

Text2.defaultProps = {
 name : 'nombre por defecto'
}

//Cambiando el estado e inicializando el valor del state usando una props
//Patron de padre a hijo y renderiza por cambio de estado en el padre.
class Contador extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contador : this.props.contadorInicial
    }
    setInterval(()=>{
      this.setState({
        contador : this.state.contador + 1
      })
    },1000)
  }
  render(){
    return <ContadorNumero numero = {this.state.contador}/>
  }
}
// Props por default
Contador.defaultProps = {
  contadorInicial : 0
}

class ContadorNumero extends React.Component {
  render(){
    return <span>{this.props.numero}</span>
  }
}




 class App extends React.Component {
  render(){
    return (
      <div>
        <NameForm />
        <Form />
        <Hello title = 'Hola Mundo'/>
        <Hello2 name = 'lulu' />
        <Text 
          arraysOfNumber = {[2,3,4]}
          text = 'Bienvenidos'
          number = {2}
          //boolean = {true}
          boolean
          objectWithInfo = {{ key : 'first value', key2 : 'otro valor'}}
          multiply = {number => (number * 5)}
          title = {<h1>Hola mundo desde react</h1>}
        />
        <Text2 name = 'Otroo valor por aqui' />
        <Contador contadorInicial = {100}/>
        <ConditionalSection />
        <Contact />
        <Hobbies />
        <ListaCars />
        <Contact2 />
      </div>
    )
  }
} 

export default App