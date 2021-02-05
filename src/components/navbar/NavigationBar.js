import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory} from 'react-router-dom';

const NavigationBar = () => {
  const {push} = useHistory(null);
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Legal-Shala</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <Nav>
          <Nav.Link onClick={(e)=>{ 
            push('/')
            localStorage.clear() }}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
  

export default NavigationBar;