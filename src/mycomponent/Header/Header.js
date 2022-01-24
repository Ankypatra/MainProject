import React from "react";
import { Container, Navbar, Nav ,NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" >
                <Container className="navbar">
                    <Navbar.Brand as={Link} to="/" className="navbrand">NEXTHIKES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className="link" >HOME</Nav.Link>
                            <Nav.Link as={Link} to="/Aboutus_Page" className="link">ABOUT US</Nav.Link>
                            {/* <Nav.Link as={Link} to="/Upcomingtrek_Page" className="link">UPCOMING TREK</Nav.Link> */}

                            <NavDropdown title="UPCOMING TREK" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/Upcomingtrek_Page" className="link"  >UPCOMING TREK</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Wintertrek_Page" className="link">WINTER TREK</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Summertrek_Page" className="link">SUMMER TREK</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/Weekendtrek_Page" className="link">WEEKEND TREK</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/Review_Page" className="link">REVIEW</Nav.Link>
                            <Nav.Link as={Link} to="/Contactus_Page" className="link">CONTACT US</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} as={Link} to="/Login_Page" className="link" >LOGIN</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/Registration_Page" className="link" >SIGN UP</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/Profile_Page" className="link" >PROFILE</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
