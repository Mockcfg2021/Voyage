import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default class Test extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <h2 style={{marginTop: "20px", marginBottom: "20px"}}>Feedback</h2>
            </div>

            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
            <div className="col-3"></div>
            <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                <div className="name" style={{marginTop: "20px", textAlign: "center"}}><b>By</b>: NGO</div>
                <p style={{marginTop: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="row">
                <div className="col-6"></div>
                </div>
            </div>
            <div className="col-3"></div>
            </div>


            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
            <div className="col-3"></div>
            <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                <div className="name" style={{marginTop: "20px", textAlign: "center"}}><b>By</b>: Principal</div>
                <p style={{marginTop: "20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="row">
                <div className="col-6"></div>
                </div>
            </div>
            <div className="col-3"></div>
            </div>
        </div>
    );
  }
}