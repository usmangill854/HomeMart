import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const NavBar=()=>{
    return<>
        <Navbar collapseOnSelect expand="lg"   bg="dark" variant="dark">
            <Container  >
                <Navbar.Brand href="/">Home Mart</Navbar.Brand>
                <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav  >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#pricing">Month Packages</Nav.Link>
                        <Nav.Link href="/cart" > Cart</Nav.Link>
                        <Nav.Link href="#deets">Contact US</Nav.Link>

                    </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
export default NavBar