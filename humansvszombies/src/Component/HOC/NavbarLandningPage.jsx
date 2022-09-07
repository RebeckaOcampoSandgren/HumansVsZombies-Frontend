import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import keycloak from '../../keycloak';



function NavbarLandningPage() {

    return(
        
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HvZ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Register" id="register">Register</Nav.Link>
            <NavLink to="/AdministrationPageView" id="adminNav">Administrator</NavLink>
            {!keycloak.authenticated && (
          <button onClick={() => keycloak.login()}>Login</button>
        )}
        {keycloak.authenticated && (
          <button onClick={() => keycloak.logout()}>Logout</button>
        )}
           <Nav.Link href="map" id="map">Game Map</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
    )

}
export default NavbarLandningPage