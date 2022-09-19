import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import keycloak from "../../keycloak";
import RenderOnRole from "../../Service/RenderOnRole";
import React from "react";

function NavbarLandningPage() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand id="hvzLogo" href="/">
          HvZ
        </Navbar.Brand>
        <Nav class="navbar-nav ml-auto">
          <RenderOnRole roles={["Admin"]}>
            {keycloak.auth() && (
              <NavLink to="/AdministrationPageView" id="adminNav">
                Administrator
              </NavLink>
            )}
          </RenderOnRole>
          {!keycloak.auth() && (
            <a href="#" id="adminNav" onClick={() => keycloak.doLogin()}>
              Login
            </a>
          )}
          {keycloak.auth() && (
            <a href='#' id="adminNav" onClick={() => keycloak.doLogout()}>Logout</a>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavbarLandningPage;
