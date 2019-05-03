import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";
import { MyComponent } from "./MyComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MyComponent />
      </div>
    );
  }
}

export default App;
