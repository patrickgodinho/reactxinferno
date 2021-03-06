import { render } from "inferno";
import { Router, Route, IndexRoute } from "inferno-router";
import createBrowserHistory from 'history/createBrowserHistory';
import "bulma/css/bulma.css";
import App from "./App";
import rotas from './rotas';
import Main from './main'

const browserHistory = createBrowserHistory();


const renderLinks = () => {

  return rotas.map(rota => <Route path={rota.to} component={rota.component} key={rota.name} />
  );
};

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRoute component={ Main }/>
      {renderLinks()}
    </Route>
  </Router>
);

render(routes, document.getElementById("app"));
