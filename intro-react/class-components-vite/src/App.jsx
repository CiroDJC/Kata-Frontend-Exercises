import { Component, Fragment } from "react";
import "./App.css";

// 1 extender de Component
class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = (type) => {
    if (type === "inc") this.setState({ counter: this.state.counter + 1 });
    else {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    }
  };

  // 2 poner el metodo de render()
  render() {
    // JSX
    return (
      // React fragment
      <>
        <h3>React con class components 👴🏽</h3>
        <div className="App">
          <div style={{ fontSize: 25, color: "yellow" }}>
            {/* Objeto */}
            Ingresa tu edad: <b>{this.state.counter}</b>{" "}
          </div>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>
        </div>

        {/* Conditional IF */}
        {/* if(state.counter > 4) {} */}
        {this.state.counter > 4 && <p>Ya puedes ir al kinder</p>}

        {/* CONDITIONAL IF ELSE */}
        {/* condicion ? verdadero : false */}

        {this.state.counter > 12 ? (
          <>
            <h4> Ya pasas a secundaria</h4>
          </>
        ) : (
          <h5> Estas pequeño</h5>
        )}

        {/* EJERCICIO 
          MOSTRAR EL SIG MENSAJE CUANDO SEAS MAYOR DE EDAD (>+ 18) YA ERES MAYOR DE EDAD
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS ENTRE 18 Y 12 AñOS O MAS  ERES UN ADOLESCENTE
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS MENOS 12 Años  ERES UN NIñO
          USAR CONDITIONAL RENDERING : )
        */}

        {this.state.counter >= 18 ? (
          <p> YA ERES MAYOR DE EDAD 🍻</p>
        ) : this.state.counter < 18 && this.state.counter >= 12 ? (
          <p> ERES UN ADOLESCENTE 📕</p>
        ) : (
          <p> ERES UN NIñO</p>
        )}
        {/*  IF ELSE IF ELSE */}
      </>
    );
  }
}

export default App;
