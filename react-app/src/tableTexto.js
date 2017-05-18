import React from "react";

const Table = (props) => {
  return (
    <table className="table">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {props.data.map(row => <TableRow item={row} key={row.email} />)}
      </tbody>
    </table>
  );
};

const TableHeader = (props) => {
    return (
        <tr>
            <th>Idade</th>
            <th>Nome</th>
            <th>Email</th>
        </tr>
    )
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.item.age}</td>
            <td>{props.item.name}</td>
            <td>{props.item.email}</td>
        </tr>
    )
}

export default Table;
