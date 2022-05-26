import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg" style={{'padding': '5px 20px'}}>
           <Navbar.Brand to="/">Dean Office</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                 <Link className="nav-students" to="/" >Student</Link>
                 <Link className="nav-addStudent" to="/addStudent">Add Student</Link>

              </Nav>
           </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarMenu;