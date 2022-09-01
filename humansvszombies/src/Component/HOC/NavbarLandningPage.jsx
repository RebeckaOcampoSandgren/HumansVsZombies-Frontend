import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function NavbarLandningPage(){

    return(
        
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HvZ</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Register" id="register">Register</Nav.Link>
           <Nav.Link href="LogIn"  id="LogIn">Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       
    )
}
export default NavbarLandningPage