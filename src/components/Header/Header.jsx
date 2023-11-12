import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink} from "react-router-dom";
const Header = () => (
    <Navbar expand="lg" className="bg-primary-subtle">
        <Container>
            <Link to={"/"} className='navbar-brand' >Car rental</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to={'/'} className={"nav-link"}>Home</NavLink>
                    <NavLink to={'/catalog'} className={"nav-link"} >Catalog</NavLink>
                    <NavLink to={'/favourites'} className={"nav-link"} >Favourites</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

 export default Header;