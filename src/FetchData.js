import React, { Component } from "react";

export class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loadscreen: true,
      response: false
    };
  }

  async componentDidMount() {
    const url = "http://www.omdbapi.com/?";
    const APIkey = "apikey=537c9a72";
    let searchTitle = this.props.queryTitle;
    let searchType = this.props.queryType;

    let API_url = url + APIkey + "&s=" + searchTitle + "&type=" + searchType;

    const answer = await fetch(API_url);
    const data = await answer.json();
    data.Response == "True"
      ? this.setState({ items: data.Search, loadscreen: false, response: true })
      : this.setState({ loadscreen: false, response: false });
    console.log(this.state.items);
  }

  render() {
    if (this.props.queryTitle === "Hollish") {
      return (
        <div>
          <img
            alt=""
            src="https://data.whicdn.com/images/23223516/original.jpg"
          />
        </div>
      );
    }
    if (this.state.loadscreen) {
      return (
        <div>
          Loading... be grateful, you can't see this screen with @Hollish's app
        </div>
      );
    }
    if (!this.state.response) {
      return (
        <div>Result not found... try harder to break my prog @Hollish</div>
      );
    }
    return (
      console.log(this.state.items),
      (
        <div>
          <h4>{this.state.items.length} result(s) found:</h4>
          {this.state.items.map(result => (
            <div>
              <div>
                {result.Title} ({result.Year})
              </div>
              <img alt="" height="200" src={result.Poster} />
            </div>
          ))}
        </div>
      )
    );
  }
}
