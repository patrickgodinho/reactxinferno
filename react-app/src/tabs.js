import React from "react";
import { Link } from "react-router-dom";

let renderLinks = (rotas, active) => {
  console.log(active);
  return rotas.map(rota =>
    <li className={rota.name === active ? 'is-active' : ''} key={rota.name}>
      <Link to={rota.to} onClick={rota.onClick}>
        <span className="icon is-small">
          <i className="fa fa-file-text-o" />
        </span>
        <span>{rota.label}</span>
      </Link>
    </li>
  );
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
