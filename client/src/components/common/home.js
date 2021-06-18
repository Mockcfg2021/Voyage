import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
export const Home = () => {
  const userName = "Shreya Maheshwari";
  var res = userName.split(" ");
  const id = "1";
  console.log(res);
  const getFirstLetter = (name) => {
    return name.substring(0, 1).toUpperCase();
  };

  // call it like this
  getFirstLetter(userName);

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
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home" className="link__pad">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#link" className="link__pad">
                    <Link
                      to="/auth/sigin"
                      style={{
                        color: "black",
                      }}
                    >
                      Signin
                    </Link>
                  </Nav.Link>
                  <NavDropdown
                    className="link__pad"
                    title={`${userName}`}
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        to={`/editprofile/${id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Edit profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Logout
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
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav>
    </>
  );
};
