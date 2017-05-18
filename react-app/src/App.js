import React, { Component } from "react";
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom";
import "bulma/css/bulma.css";
import Tabs from "./tabs";
import Texto from "./texto";
import Json from "./json";
import Imagem from "./imagem";
import Main from './main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
      rotas: [
                {
          to: "/",
          onClick: () => this.setState({ ...this.state, active: "" }),
          label: "Home",
          component: Main,
          name: ''
        },
        {
          to: "/texto",
          onClick: () => this.setState({ ...this.state, active: "texto" }),
          label: "TEXTO",
          component: Texto,
          name: 'texto'
        },
        {
          to: "/json",
          onClick: () => this.setState({ ...this.state, active: "json" }),
          label: "JSON",
          component: Json,
          name: 'json'
        },
        {
          to: "/imagem",
          onClick: () => this.setState({ ...this.state, active: "imagem" }),
          label: "IMAGEM",
          component: Imagem,
          name: 'imagem'
        }
      ]
    };
  }

  renderLinks() {
   return this.state.rotas.map(rota => 
      <Route path={rota.to} component={rota.component} key={rota.name}/>
    );
  }

  render() {
    return (
      <Router>
        <div>
          <Tabs rotas={this.state.rotas} active={this.state.active}/>
          <div className="content columns">
            {this.renderLinks()}
            <div />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
