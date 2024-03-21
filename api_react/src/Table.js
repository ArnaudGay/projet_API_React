import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <Tablebody />
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

const Tablebody = () => {
  return (
    <tbody>
      <tr>
        <td>Arnaud</td>
        <td>Homme</td>
      </tr>
      <tr>
        <td>Thomas</td>
        <td>Homme</td>
      </tr>
      <tr>
        <td>Melissa</td>
        <td>Femme</td>
      </tr>
      <tr>
        <td>Félix</td>
        <td>Homme</td>
      </tr>
      <tr>
        <td>Robinson</td>
        <td>Homme</td>
      </tr>
      <tr>
        <td>Satine</td>
        <td>Femme</td>
      </tr>
      <tr>
        <td>Manon</td>
        <td>Femme</td>
      </tr>
    </tbody>
  );
};

export default Table;
