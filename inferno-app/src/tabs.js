import { Link } from "inferno-router";

let renderLinks = (rotas, active) => {
  if (rotas) {
    return rotas.map(rota => (
      <li className={rota.name === active ? "is-active" : ""} key={rota.name}>
        <Link to={rota.to}>
          <span className="icon is-small">
            <i className="fa fa-file-text-o" />
          </span>
          <span>{rota.label}</span>
        </Link>
      </li>
    ));
  }
};

const Tabs = props => {
  return (
    <div>
      <div className="tabs is-centered is-large">
        <ul>{renderLinks(props.rotas, props.active)}</ul>
      </div>
    </div>
  );
};

export default Tabs;
