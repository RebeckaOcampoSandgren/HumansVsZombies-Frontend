import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import keycloak from '../../keycloak';
import RenderOnRole from '../RenderOnRole';
import React, { useEffect, useState, array } from 'react';




function NavbarLandningPage() {


    return(
        
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">HvZ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/RegisterPageView" id="adminNav">Register</Nav.Link>
            <RenderOnRole roles={['Admin']}>
            {keycloak.auth() && (
            <NavLink to="/AdministrationPageView" id="adminNav">Administrator</NavLink>
            )}
            </RenderOnRole>
            {!keycloak.auth() && (
          <button onClick={() => keycloak.doLogin()}>Login</button>
        )}
        {keycloak.auth() && (
          <button onClick={() => keycloak.doLogout()}>Logout</button>
        )}
           <Nav.Link href="map" id="map">Game Map</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
    )

}
export default NavbarLandningPage