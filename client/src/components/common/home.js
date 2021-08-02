import React, { useEffect, useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export const Home = () => {
  const [userName, setUsername] = useState("");
  const history = useHistory();

  const onLogout = () => {
    //console.log("hello");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    axios.get("http://localhost:5000/logout").then((res) => {
      console.log(res);
    });
    setUsername("");
    history.push("/");
  };
  useEffect(() => {
    var user = localStorage.getItem("userId");
    if (user) {
      user = user.slice(1, -1);
      console.log(`http://localhost:5000/profile/${user}`);
      axios.get(`http://localhost:5000/profile/${user}`).then((res) => {
        console.log(res.data);
        setUsername(res.data.user.userName);
      });
    }
  }, [user]);

  var user = localStorage.getItem("userId");
  var role = localStorage.getItem("role");
  console.log(role);
  var res = userName.split(" ");
  const id = "1";
  console.log(res);

  return (
    <>
      <Container fluid>
        <Row>
          <Col
            style={{
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <Navbar style={{ color: "#7a9e9f" }} expand="lg">
              <Navbar.Brand href="#home" style={{ color: "#7a9e9f" }}>
                Voyage
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  {role && (
                    <Nav.Link
                      className="link__pad"
                      style={{ color: "#7a9e9f" }}
                    >
                      <Link
                        to="/resources"
                        style={{ textDecoration: "none", color: "#7a9e9f" }}
                      >
                        Resources
                      </Link>
                    </Nav.Link>
                  )}
                  <Nav.Link className="link__pad" style={{ color: "#7a9e9f" }}>
                    <Link
                      to={`/forum`}
                      style={{ textDecoration: "none", color: "#7a9e9f" }}
                    >
                      Community Forum
                    </Link>
                  </Nav.Link>
                  <Nav.Link className="link__pad" style={{ color: "#7a9e9f" }}>
                    <Link
                      to={`/leaderboard`}
                      style={{ textDecoration: "none", color: "#7a9e9f" }}
                    >
                      LeaderBoard
                    </Link>
                  </Nav.Link>
                  {role !== "\"teacher\"" ? (
                    <Nav.Link
                      className="link__pad"
                      style={{ color: "#7a9e9f" }}
                    >
                      <Link
                        to="/feedback"
                        style={{ textDecoration: "none", color: "#7a9e9f" }}
                      >
                        Feedback
                      </Link>
                    </Nav.Link>
                  ) : (
                    <Nav.Link
                      className="link__pad"
                      style={{ color: "#7a9e9f" }}
                    >
                      <Link
                        to="/showfeedback"
                        style={{ textDecoration: "none", color: "#7a9e9f" }}
                      >
                        Feedback
                      </Link>
                    </Nav.Link>
                  )}
                  {/*                   <Nav.Link href="#link" className="link__pad">
                  <Link
                    to="/auth/sigin"
                    style={{
                      textDecoration: "none",
                      color: "#7a9e9f",
                    }}
                  >
                    Signin
                  </Link>
                </Nav.Link> */}
                  {userName !== "" && (
                    <>
                      <NavDropdown
                        className="link__pad"
                        title={`${userName}`}
                        id="basic-nav-dropdown"
                        style={{ color: "#7a9e9f" }}
                      >
                        <NavDropdown.Item>
                          <Link
                            to={`/editprofile/${id}`}
                            style={{ textDecoration: "none", color: "#7a9e9f" }}
                          >
                            Edit profile
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <span onClick={onLogout} style={{ color: "#7a9e9f" }}>
                            Logout
                          </span>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Row>
                        <Col>
                          <div
                            className="avatar"
                            style={{
                              backgroundImage: `url(https://ui-avatars.com/api/?name=${res[0]}+${res[1]})`,
                            }}
                          ></div>
                        </Col>
                      </Row>
                    </>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav> */}
    </>
  );
};
