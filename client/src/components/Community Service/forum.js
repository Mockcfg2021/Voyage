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
                <h2 style={{marginTop: "20px", marginBottom: "20px"}}>Community Forum</h2>
                <h5 style={{marginTop: "20px", marginBottom: "20px"}}>A shoutout to our best teachers and learners!</h5>
            </div>

            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="col-12 col-lg-2"></div>
                <div className="col-12 col-lg-8">
                    <div className="row">
                        <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                            <div className="name"><b>Teacher's Name</b>: Shreya M.</div>
                            <div className="school-name" style={{marginTop: "10px"}}><b>School Name</b>: St. Pauls Sr. Sec. School</div>
                            <p style={{marginTop: "10px"}}>A shoutout to our lovely teacher/learner for finishing the courses with highest grades and also top learner of the month! &#127881; &#10024;</p>
                        </div>
                        <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                            <div className="name"><b>Teacher's Name</b>: Kriti J.</div>
                            <div className="school-name" style={{marginTop: "10px"}}><b>School Name</b>: St. Peter's High School</div>
                            <p style={{marginTop: "10px"}}>This is a shoutout to our amazing teacher and a learner for finishing maximum number of courses in this month! &#127881; &#127775;</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-2"></div>
            </div>


            <div className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="col-12 col-lg-2"></div>
                <div className="col-12 col-lg-8">
                    <div className="row">
                        <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                            <div className="name"><b>Teacher's Name</b>: Shreya M.</div>
                            <div className="school-name" style={{marginTop: "10px"}}><b>School Name</b>: St. Pauls Sr. Sec. School</div>
                            <p style={{marginTop: "10px"}}>A shoutout to our lovely teacher/learner for finishing the courses with highest grades and also top learner of the month! &#127881; &#10024;</p>
                        </div>
                        <div className="col-6" style={{padding: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "10px"}}>
                            <div className="name"><b>Teacher's Name</b>: Kriti J.</div>
                            <div className="school-name" style={{marginTop: "10px"}}><b>School Name</b>: St. Peter's High School</div>
                            <p style={{marginTop: "10px"}}>This is a shoutout to our amazing teacher and a learner for finishing maximum number of courses in this month! &#127881; &#127775;</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-2"></div>
            </div>
        </div>
            
    );
  }
}