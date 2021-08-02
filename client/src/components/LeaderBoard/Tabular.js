import React, { Component } from "react";

export default class Tabular extends Component {
  render() {
    return (
      <div style={{margin:"60px"}} >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table
                className="table table-striped table-light "
                style={{ borderColor: "white" }}
              >
                <thead style={{ borderBottom: "0px" }}>
                  <tr colSpan="3">
                    <td
                      colSpan="3"
                      style={{
                        textAlign: "center",
                        color: "black",
                        backgroundColor: "lightblue",
                        height:"35px"
                      }}
                    >
                      LEADERBOARD
                    </td>
                  </tr>
                  <tr style={{border:"none"}} >
                    <th style={{ borderColor: "white" }} >Rank</th>
                    <th  style={{ borderColor: "white" }}>Name</th>
                    <th style={{ borderColor: "white" }}>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.teachers.map((t,index)=>
                        <tr>
                          <td>{index+1}</td>
                          <td>{t}</td>
                          <td>{this.props.scores[index]}</td>
                        </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
