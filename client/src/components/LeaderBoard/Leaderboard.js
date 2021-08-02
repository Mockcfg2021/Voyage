import React, { Component } from "react";
import Tabular from "./Tabular";
import Graphical from "./Graphical";
import axios from "axios";

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "tabular",
      teachers: [],
      scores: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/leaderboard").then((res) => {
      console.log(res.data.leader);
      res.data.leader.map((lead) => {
        this.setState((prevState) => ({
          teachers: [...prevState.teachers, lead[0]],
          scores: [...prevState.scores, lead[1]],
        }));
      });
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      view: e.target.value,
    });
  };

  render() {
    var role = localStorage.getItem("role");
    console.log(role);
    return (
      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {role === '"teacher"' ? <h2>Your Rank: 2</h2> : null}
          <div>
            <button
              onClick={this.handleChange}
              style={{
                marginRight: "20px",
                borderRadius: "3px",
                border: "none",
                padding: "7px",
                backgroundColor: "#7a9e9f",
              }}
              value="tabular"
            >
              Tabular
            </button>
            <button
              onClick={this.handleChange}
              style={{
                borderRadius: "3px",
                border: "none",
                padding: "7px",
                backgroundColor: "#7a9e9f",
              }}
              value="graphical"
            >
              Graphical
            </button>
          </div>
        </div>
        {this.state.view === "tabular" ? (
          <Tabular teachers={this.state.teachers} scores={this.state.scores} />
        ) : (
          <Graphical
            teachers={this.state.teachers}
            scores={this.state.scores}
          />
        )}
      </div>
    );
  }
}
