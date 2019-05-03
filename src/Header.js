import React, { Component } from "react";
import logo from "./logo.svg";

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Almost the same app from @Hollish, just better</h3>
      </header>
    );
  }
}
