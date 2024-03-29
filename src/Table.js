import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Director</th>
        <th>Name</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  return (
    <tr>
      <td>{props.tableContent.Director}</td>
      <td>{props.tableContent.Title}</td>
    </tr>
  );
};

export default function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody tableContent={props.tableContent} />
    </table>
  );
}
