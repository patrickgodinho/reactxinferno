import Component from "inferno-component";
import "bulma/css/bulma.css";
import Tabs from "./tabs";
import rotas from "./rotas";
import Bench from "./bench";

const bench = new Bench();

class App extends Component {
  componentDidMount() {
    bench.stop();
  }

  render() {
    bench.start("Aplicação");
    return (
      <div>
        <Tabs rotas={rotas} />
        <div className="content columns">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
