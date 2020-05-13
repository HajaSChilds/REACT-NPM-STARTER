import React, { Component } from "react";
import { footer } from "gingerbee_npm";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> React Starter</h1>
        {footer("Ginger Tea Technologies, LLC")}
      </div>
    );
  }
}
