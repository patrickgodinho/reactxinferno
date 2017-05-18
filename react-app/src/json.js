import React, { Component } from "react";
import Bench from "./bench";
import dados from "./dados/paises";
import Table from "./table";

const bench = new Bench();
const TIMES = 15;

class Json extends Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.state = dados.state();
    this.totalLoad = 0;
  }
  onClear = e => {
    this.setState(dados.clear());
  };

  onLoad = e => {
    dados.load().then(data=>{
      this.setState(data);
    })
  };

  componentDidMount() {
    this.bench = setInterval(() => {
      this.count = this.count + 1;
      bench.delay(() => {
        dados.load().then(data => {
          this.setState(data);
        });
      }, 10);
      bench.delay(() => this.setState(dados.clear()), 50);
      if (this.count > TIMES) {
        clearInterval(this.bench);
        bench.delay(
          () =>
            console.log("Média:", (this.totalLoad / TIMES).toFixed(2), "ms"),
          100
        );
      }
    }, 750);
  }

  componentDidUpdate() {
    let isLoad = this.state.dados.length > 0;
    if (isLoad)
      bench.stop(renderTime => {
        this.totalLoad = this.totalLoad + renderTime;
      });
    else bench.stop();
  }

  render() {
    bench.start("Json");
    return (
      <div className="column is-10 is-offset-1">
        <a
          className="button is-success"
          disabled={this.state.dados.length > 1}
          onClick={this.onLoad}
        >
          Carregar
        </a>
        <a
          className="button is-warning"
          disabled={this.state.dados.length < 1}
          onClick={this.onClear}
        >
          Limpar
        </a>

        <Table data={this.state.dados} headers={['Nome', 'Código']} keys={['name', 'code']} />
      </div>
    );
  }
}

export default Json;
