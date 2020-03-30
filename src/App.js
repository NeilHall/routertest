import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Header'
import About from "./About"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavItem from "react-bootstrap/NavItem";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
        <Router>
            <div className="App-header">
                <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            {/*<LinkContainer to="/about">*/}
                            {/*    <NavItem>About</NavItem>*/}
                            {/*</LinkContainer>*/}
                            <Nav.Link as={Link} to="/about" >About</Nav.Link>
                            {/*<Link to="/about">About</Link>*/}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            <Switch>
                <Route path="/about">
                  <About />
                </Route>
            </Switch>
            </div>

        </Router>
  );
}

export default App;
