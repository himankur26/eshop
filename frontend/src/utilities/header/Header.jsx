import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
//import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from '../../store/Auth';
function Header() {
  const {isLoggedIn} = useAuth()
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 sticky-top">
      <Container>
        <Navbar.Brand href="#home">Eshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-3 ">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

          </Nav>
          <div className='d-flex gap-4 fs-18'><FaSearch />
        
        {isLoggedIn ? 'pro' : 'log'}  
        </div>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;