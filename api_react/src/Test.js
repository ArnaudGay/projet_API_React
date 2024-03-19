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
    ];
    return (
      <div className="Test">
        <h1>Notre entreprise</h1>
        <div className="Test">
          <Table tableContent={dataToPass} />
        </div>
      </div>
    );
  }
}

export default Test;
