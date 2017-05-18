import Inferno from "inferno";
import "bulma/css/bulma.css";
import Tabs from "./tabs";
import Texto from "./texto";
import Json from "./json";
import Imagem from "./imagem";
import rotas from './rotas';

const App = (props) => {
  return (
    <div>
      <Tabs rotas={rotas} />
      <div className="content columns">
        {props.children}
      </div>
    </div>
  );
};

export default App;
