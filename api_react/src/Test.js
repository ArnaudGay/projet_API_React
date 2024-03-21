import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        name: "Jules",
        type: "CEO",
      },
      {
        name: "Manon",
        type: "DRH",
      },
      {
        name: "Arnaud",
        type: "CTO",
      },
      {
        name: "Emma",
        type: "RH",
      },
      {
        name: "Satine",
        type: "DCommerciale",
      },
      {
        name: "Hey",
        type: "I'm ici",
      },
    ];
    return (
      <div className="Test">
        <h1>Moviedle</h1>
        <label>Ecrit moi le nom d'un film:</label>
        <input>Le nom du film</input>
        <div className="Test">
          <div className="Test">
            <h1> Saucisse</h1>
            <Table tableContent={dataToPass} />
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
