import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
//import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from '../../store/Auth';
function Header() {
  const {isLoggedIn} = useAuth()
  const {user} = useAuth()
  const userdata = user?.userData
  console.log(userdata?.role)
  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 sticky-top">
      <Container>
      <Navbar.Brand href="#home">
      <img src='https://websitedemos.net/custom-printing-02/wp-content/uploads/sites/459/2019/06/print-1.svg' className='img-fluid'/>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-3 ">
            <Nav.Link className ='nav-item-text text-uppercase' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className ='nav-item-text text-uppercase' as={Link} to="/products"> All Products</Nav.Link>

            <Nav.Link className ='nav-item-text text-uppercase' as={Link} to="/about">About</Nav.Link>
            <Nav.Link className ='nav-item-text text-uppercase' as={Link} to="/contact">Contact Us</Nav.Link>

            <NavDropdown className ='nav-item-text text-uppercase'  title={<span className="nav-item-text">Account</span>} id="basic-nav-dropdown">
      {isLoggedIn ? (
        <>
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/profile">My Account</NavDropdown.Item>
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/">Cart</NavDropdown.Item>
          {userdata?.role === "seller"?(
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/addproduct">Add Product</NavDropdown.Item>
          ):("") } 

          <NavDropdown.Divider />
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/logout">Logout</NavDropdown.Item>
        </>
      ) : (
        <>
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/auth/login">Login</NavDropdown.Item>
          <NavDropdown.Item className ='nav-item-text text-uppercase' as={Link} to="/auth/sign-up">Sign Up</NavDropdown.Item>
        </>
      )}
    </NavDropdown>

          </Nav>
          {/* <div className='d-flex gap-4 fs-18'><FaSearch />
        
        {isLoggedIn ? 'pro' : 'log'}  
        </div> */}
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;