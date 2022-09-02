import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'




function NavbarLandningPage() {

  return (

    <Navbar bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/LandingPageView" id="adminNav">HvZ</NavLink>
          <NavLink to="/AdministrationPageView" id="adminNav">Administrator</NavLink>
        </Nav>
      </Container>
    </Navbar>

  )
}
export default NavbarLandningPage