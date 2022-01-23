import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Nav } from 'react-bootstrap'

export default function TopBar() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img src="../../instacartLogo.png" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link>
                        <Button variant="light">Log in</Button>
                        <Button variant="success">Sign up</Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}