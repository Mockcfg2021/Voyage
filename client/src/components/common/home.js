import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/home.css";
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
                    <Link to={`/editprofile/${id}`}  style={{textDecoration:"none",color:"black"}} >
                      Edit profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
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
  );
};
