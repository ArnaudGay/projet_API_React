import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        name: "Hey",
        type: "I'm ici",
      },
    ];
    return (
      <div className="Test">
        <div className="Test">
          <h1> Saucisse</h1>
          <Table tableContent={dataToPass} />
        </div>
      </div>
    );
  }
}

export default Test;
