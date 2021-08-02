import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/img.jpg";
import { Link } from "react-router-dom";
import NGOInputs from "../NGO/ngoinput";
import axios from 'axios';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses:[]
    };
  }
  componentDidMount() {

    axios.get("http://localhost:5000/resources").then((res)=>{
      console.log(res.data)
      this.setState({
        courses:res.data.courses
      })
      var resources = res.data.courses[0].resource[0]
      localStorage.setItem('resources',JSON.stringify(resources))
      
    })
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration: 2000,
    });
  }
  render() {
    var role = localStorage.getItem("role");
    console.log(this.state.courses)
    //console.log(role.length);
    return (
      <>
        {role !== '"ngo"' ? (
          <div className="container-fluid">
            <div
              className="row"
              style={{ marginTop: "40px", marginBottom: "20px" }}
            >
              <h1
                style={{ textAlign: "center", marginBottom: "50px" }}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="20"
              >
                Resources
              </h1>
              {/* <div style={{marginLeft: "50px", borderBottom: "5px solid #7e9e9f", width: "100px", marginBottom: "30px"}}></div> */}
              <div
                className="row"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay="20"
              >
                {
                    this.state.courses.map((c,index)=>
                    <div
                    className="col-12 col-lg-4"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    <div
                      className="card"
                      style={{
                        width: "20rem",
                        margin: "auto auto",
                        boxShadow:
                          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      }}
                    >
                      <img
                        className="card-img-top"
                        src={img}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{c.topic}</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <Link
                          to={{
                            pathname:`/resource/${c.topic}`,
                            state:{ resources: c.resource}
                          }}
                          className="btn"
                          style={{ backgroundColor: "#7a9e9f" }}
                        >
                          View Resources
                        </Link>
                      </div>
                    </div>
                  </div>
                    )
                  }
              </div>
            </div>
          </div>
        ) : (
          <NGOInputs />
        )}
      </>
    );
  }
}
