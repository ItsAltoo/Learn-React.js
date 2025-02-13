import {
  Button,
  Container,
  Form,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import "../styles/Navbar.css";

const NavScrollExample = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Alto</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Gallery" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">2020</NavDropdown.Item>
              <NavDropdown.Item href="#action4">2021</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Another Years...
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="form"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavScrollExample;
