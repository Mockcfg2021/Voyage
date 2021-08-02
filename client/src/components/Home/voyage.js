import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/rural-edu.jpeg";
import img1 from "../../assets/rural.jpg";
import "./voyage.css";

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
        <>
        <section id="main" className="align-items-center" style={{marginTop: "20px"}}>
            <div className="container">
                <div className="row" >
                    <div className="col-lg-12"
                        data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" data-aos-delay="200">
                        <h1 style={{textAlign: "center", marginTop: "100px", fontSize: "52px"}}>
                            Voyage initiative trains, coaches, builds capacity of school leaders, teachers and parents.
                        </h1>
                        <h2 style={{textAlign: "center", marginTop: "80px", fontSize: "24px"}}>
                            Our mission is to empower key stakeholders in communities to eliminate inequity for our children to help them reach their fullest potential.
                        </h2>
                        <div style={{textAlign: "center", marginTop: "80px"}}>
                            <Link to="/auth/signin" className="btn-get-started scrollto">Login</Link>
                            <Link to="/auth/signin" style={{color: "#7a9e9f", fontWeight: "bolder"}}
                                className="venobox btn-signup">
                                Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       {/* Why voyage, what does voyage do */}

        <section>
            <div className="container" style={{marginBottom: "80px"}}>
                <div className="col-12">
                    <h3 className="pragati-title">About</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4 className="mt-3 text-center" style={{color: "#3b878a", fontWeight: "bolder", fontSize: "29px"}}>Why Voyage?</h4>

                        <div className="col-md-12 text-justify mt-2 content">
                            <p style={{color: "#5ea8ab"}}>
                            Voyage intend to address social marginalization and poverty by educating the youth and assisting them with skill development techniques.
                            Voyage Educare Foundation began its journey with significant steps towards providing quality education and health care facilities to underprivileged section of the society.
                            Education is the premise of progress. Voyage believe in reforming the present for a better future.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pb-4">
                    <div className="col-12 col-md-6 order-2 order-lg-1">
                        <h4 className="mt-3 text-center" style={{color: "#3b878a", fontWeight: "bolder", fontSize: "29px"}}>What does Voyage do?</h4>

                        <div className="col-md-12 text-justify mt-2 content">
                            <p style={{color: "#5ea8ab"}}>
                            Established in 2019, Voyage Educare Foundation is a non-profit organisation that has been actively transforming the society by facilitating education and healthcare programmes for children from low-income communities and training programmes for teachers.
                            Raabta, which means connection, it strives towards building connections amongst students, teachers and parents with the aim to assist them in bridging societal gaps by providing them with excellent education.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 order-1 order-lg-2">
                        <img src={img1} className="img-fluid" alt="" height="30px" />
                    </div>
                </div>
            </div>
        </section>

     
        <div className="container" style={{backgroundColor: "#f0eddc"}}>
                <div className="row" >
                    <div className="col-lg-12">
                        <h1 style={{textAlign: "center", marginTop: "90px", color: "#054547"}}>
                            JP Morgan Chase - Code for Good
                        </h1>
                        <h2 style={{textAlign: "center", marginTop: "50px", marginBottom: "100px"}}>
                            Voyage EduCare Foundation - Team 29</h2>
                    </div>
                </div>
            </div>
        </>
    );
  }
}