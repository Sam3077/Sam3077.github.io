import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navbar = () => {

    return (
    <BootstrapNavbar variant="light" expand="md" id="navbar" fixed="top">
        <BootstrapNavbar.Brand>
            <Nav.Link as={Link} className="brand" smooth duration={500} to="hero">
                Sam Hirsch
            </Nav.Link>
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse>
            <Nav className="link-container">
                <Nav.Link as={Link} className="cta-btn" smooth duration={1000} activeClass="active" to="about" spy>
                    About
                </Nav.Link>
                <Nav.Link as={Link} className="cta-btn" smooth duration={1000} activeClass="active" spy to="experience">
                    Experience
                </Nav.Link>
                <Nav.Link as={Link} className="cta-btn" smooth duration={1000} activeClass="active" spy to="projects">
                    Projects
                </Nav.Link>
                <Nav.Link as={Link} className="cta-btn" smooth duration={1000} activeClass="active" spy to="final-notes">
                    Final Notes
                </Nav.Link>
                <Nav.Link as={Link} className="cta-btn" smooth duration={1000} activeClass="active" spy to="contact">
                    Contact
                </Nav.Link>
            </Nav>
        </BootstrapNavbar.Collapse>
    </BootstrapNavbar>)
}

export default Navbar;