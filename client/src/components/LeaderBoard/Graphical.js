import React, { Component } from "react";
import { Bar } from "react-chartjs-2";


export default class Graphical extends Component {
  render() {
    console.log(this.state);
    return (
      <div style={{ height: "70%", width: "70%" }}>
        <Bar
          data={{
            labels: this.props.teachers,
            datasets: [
              {
                label: "Score",
                backgroundColor: [
                  "rgba(122, 158, 159, 1)",
                  "rgba(122, 158, 159, 0.9)",
                  "rgba(122, 158, 159, 0.8)",
                  "rgba(122, 158, 159, 0.7)",
                  "rgba(122, 158, 159, 0.6)",
                  "rgba(122, 158, 159, 0.55)",
                  "rgba(122, 158, 159, 0.5)",
                  "rgba(122, 158, 159, 0.45)",
                  "rgba(122, 158, 159, 0.4)",
                  "rgba(122, 158, 159, 0.35)",
                ],
                data: this.props.scores,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: `Leaderboard`,
              },
              legend: {
                display: true,
              },
            },
          }}
        />
      </div>
    );
  }
}
