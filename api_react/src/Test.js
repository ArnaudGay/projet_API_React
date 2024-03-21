import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        name: "Arnaud",
        type: "Chevre",
      },
      {
        name: "Thomas",
        type: "Homme",
      },
      {
        name: "Mel",
        type: "Femme",
      },
      {
        name: "Pierre",
        type: "Ronfleur",
      },
      {
        name: "Macron",
        type: "Explosion",
      },
      {
        name: "Félix",
        type: "Prédateur",
      },
      {
        name: "Gatho",
        type: "Bebou",
      },
    ];
    return <Table tableContent={dataToPass} />;
  }
}

export default Test;
