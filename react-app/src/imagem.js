import React, { Component } from "react";
import Bench from "./bench";
import dados from "./dados/imagens";

const bench = new Bench();
const TIMES = 15;

class Imagem extends Component {
  constructor(props) {
    super(props);
    this.count = 1;
    this.totalLoad = 0;
    this.state = dados.state();
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
      bench.delay(() => this.setState(dados.clear()), 300);
      if (this.count > TIMES) {
        clearInterval(this.bench);
        bench.delay(
          () =>
            console.log("Média:", (this.totalLoad / TIMES).toFixed(2), "ms"),
          2000
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

  renderImagens() {
    let count =0;
    return this.state.dados.map(dado => {
      return (
      <figure className="image is-square" key={count++}>
        <img src={dado} alt='' />
      </figure>
      )
    });
  }
  render() {
    bench.start("imagem");
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
        {this.renderImagens()}
      </div>
    );
  }
}
export default Imagem;
