import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import keycloak from '../../keycloak';
import RenderOnRole from '../RenderOnRole';
import React from 'react';

function NavbarLandningPage() {

  return (

    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">HvZ</Navbar.Brand>
        <Nav class="navbar-nav ml-auto">
          <RenderOnRole roles={['Admin']}>
            {keycloak.auth() && (
              <NavLink to="/AdministrationPageView" id="adminNav">Administrator</NavLink>
            )}
          </RenderOnRole>
          {!keycloak.auth() && (
            <button class="btn btn-light" onClick={() => keycloak.doLogin()}>Login</button>
          )}
          {keycloak.auth() && (
            <button class="btn btn-light" onClick={() => keycloak.doLogout()}>Logout</button>
          )}
          <NavLink to="/RegisterPageView" id="adminNav">Register</NavLink>
          <NavLink to="map" id="adminNav">Game Map</NavLink>

        </Nav>
      </Container>
    </Navbar>

  )

}
export default NavbarLandningPage