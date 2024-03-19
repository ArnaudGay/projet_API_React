import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    return (<Table tableContent={dataToPass} />;)
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
  }
}

export default Test;
