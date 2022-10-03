import React, { Component } from "react";

export default class Button extends Component {
  render() {
    // console.log("this props", this.props);

    return (
      <div>
        <h3>Componente boton</h3>
        <span>Counter que llega desde props {this.props.age}</span>
        <p>Darkmode que llega desde props {this.props.style.toString()}</p>

        <div>
          <button onClick={() => this.props.incrementCounter(3)}>
            {" "}
            Incrementar counter
          </button>
        </div>
      </div>
    );
  }
}
