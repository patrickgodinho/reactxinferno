import React from "react";

const Table = (props) => {
  let count = 0;
  return (
    <table className="table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {props.data.map(row => <TableRow item={row} key={count++}/>)}
      </tbody>
    </table>
  );
};

const TableHeader = (props) => {
    return (
        <tr>
            <th>Nome</th>
            <th>Código</th>
        </tr>
    )
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.code}</td>
        </tr>
    )
}

export default Table;
