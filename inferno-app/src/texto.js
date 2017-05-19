import Component from "inferno-component";
import Bench from "./bench";
import dados from "./dados/exemplo";
import Table from "./table";

const bench = new Bench();
const TIMES = 15;

class Texto extends Component {
  constructor(props) {
    super(props);
    this.state = dados.state();
    this.count = 1;
    this.totalLoad = 0;
  }
  onClear = e => {
    this.setState(dados.clear());
  };

  onLoad = e => {
    this.setState(dados.load());
  };

  componentDidMount() {
    this.bench = setInterval(() => {
      this.count = this.count + 1;
      bench.delay(() => this.setState(dados.load()), 10);
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
    bench.start("Texto");
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

        <Table
          data={this.state.dados}
          headers={["Idade", "Nome", "Email"]}
          keys={["age", "name", "email"]}
        />
      </div>
    );
  }
}

export default Texto;
