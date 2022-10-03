import React, { Component } from "react";

export default class PersonComponent extends Component {

  componentWillMount = () => {
    console.log("antes de montaje")
  } 

  componentDidMount = () => {
    console.log("Despues del montaje")
  }

  componentWillReceiveProps = (nextProps) => {
    console.log("nextProps",nextProps)
    console.log("Se ejecuta inmediatamente despues que el componente reciba nueva propiedades")
  }

  shouldComponentUpdate = (nextProps,nextState) => {
    console.log(nextProps)
    console.log("nextState",nextState)
    console.log("Se ejectuar antes de empezar a actualizar el componente, cuando llegan las nuevas propuedas (nextProps) y el nuevo estado (nextState)")
  }

  componentWillUpdate = (nextProps,nextState) => {
    console.log("Una vez que el metedodo shouldComponentUpdate nos devuelve un true se ejecuta el componentWillUpdate")
    console.log(nextProps,nextState)
  }

  componentDidUpdate = (prevProp, prevState) => {
    console.log("componentDidUpdate")
    console.log(prevProp)
    console.log(prevState)
  }

  componentWillUnmount = () => {
    console.log("componentWillUnmount")
  }

  render() {
    console.log("Render")
    return <p> YA ERES MAYOR DE EDAD 🍻 {this.props.test}</p>;
  }
}
