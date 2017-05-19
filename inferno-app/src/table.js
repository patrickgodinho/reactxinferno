const Table = props => {
  return (
    <table className="table">
      <thead>
        <TableHeader headers={props.headers} />
      </thead>
      <tbody>
        {props.data.map(row => (
          <TableRow item={row} key={row.email} keys={props.keys} />
        ))}
      </tbody>
    </table>
  );
};

const TableHeader = props => {
  let count = 0;
  return (
    <tr>
      {props.headers.map(t => <th key={count++}>{t}</th>)}
    </tr>
  );
};

const TableRow = props => {
  let count = 0;
  return (
    <tr>
      {props.keys.map(k => <td key={count++}>{props.item[k]}</td>)}
    </tr>
  );
};

export default Table;
