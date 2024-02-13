import { Component } from "react";
import Display from "./Display"
import PanelDeBotones from "./PanelDeBotones"
import operaciones from "../logic/operaciones";
import "../Estilos/App.css"

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

  render() {

    return (
      <div className="comoponent-app">
        <Display value={this.state.siguiente || this.state.total || "0"}></Display>
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );


  }
  
}

export default App;
