import React, { Component } from "react";

class Table extends Component {
  render() {
    const { tableContent } = this.props;
    return (
      <table>
        <TableHeader />
        <Tablebody tableContent={tableContent} />
      </table>
    );
  }
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
  );
};

const Tablebody = (props) => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

export default Table;
