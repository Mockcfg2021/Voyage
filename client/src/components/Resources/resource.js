import React, { Component } from "react";
import swal from "@sweetalert/with-react";
import { withRouter } from "react-router";


export default class resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resource:localStorage.getItem("resources").slice(1, -1)
    };
  }

  componentDidMount(){
    this.setState({
      resource:this.props.location.state.resources,
    })
  }
  handleClick = (e) => {
    e.preventDefault();
    swal(
      "",
      "Please make sure you have followed through the resource.These test marks will be accounted in your credits. ",
      "info"
    ).then(() => {
      const course = this.props.location.pathname.slice(10,)
      console.log(course)
      localStorage.setItem("course",JSON.stringify(course))
      this.props.history.push({pathname:`/game`,state: { data:course }});
    });
  };
  render() {
    const { match, location } = this.props;
    console.log(location.state.resources);
    console.log(this.props.location)
    if (location.state.resources) {
      return (
        <div className="container-fluid">
          <div className="row">
           {/*  {location.state.resources.map((c, index) => ( */}
              <div
                className="col-12 col-lg-6"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                /* key={index} */
              >
                <div
                  className="card"
                  style={{
                    width: "35rem",
                    margin: "auto auto",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <div className="card-body">
                    <h4>Student Engagement</h4>
                    <iframe
                      width="520"
                      height="315"
                      src={this.state.resource} /* {c[index]} */
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <button
                      className="btn"
                      style={{ color: "#7a9e9f", textDecoration: "underline", backgroundColor:"white",textAlign:"left" }}
                      onClick={this.handleClick}
                    >
                      Take a quiz
                    </button>
                  </div>
                </div>
              </div>
            {/* ))} */}
          </div>
        </div>
      );
    }
    else{
      return(
        <div></div>
      )
    }
  }
}
