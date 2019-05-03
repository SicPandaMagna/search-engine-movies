import React, { Component } from "react";
import { FetchData } from "./FetchData";

const green = "#39D1B4";
const yellow = "#FFD712";

export class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      type: "movie",
      color: green,
      search: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value, search: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.title.length > 0) {
      this.setState({ search: true });
    } else {
      this.setState({ search: false });
      alert("Title is empty");
    }
    console.log(this.state);
  };

  changeColor = () => {
    const newColor = this.state.color === green ? yellow : green;
    this.setState({ color: newColor });
  };

  render() {
    const searchJSX = (
      <div>
        <button onClick={this.changeColor}> Change background color </button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title..."
            value={this.state.title}
            onChange={this.handleChange}
          />
          <select
            value={this.state.type}
            name="type"
            onChange={this.handleChange}
          >
            <option>movie</option>
            <option>series</option>
            <option>episode</option>
          </select>
          <button onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    );

    return (
      <div style={{ background: this.state.color }}>
        {searchJSX}
        {this.state.search ? (
          <div>
            <FetchData
              queryTitle={this.state.title}
              queryType={this.state.type}
            />
          </div>
        ) : (
          <div>Enter keywords to show results</div>
        )}
      </div>
    );
  }
}
