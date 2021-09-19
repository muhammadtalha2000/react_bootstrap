import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contac';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function Bar() {
    return (
        <Router>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand id="portfolio">Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link ><Link className="link" to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className="link" to='/about'>About</Link></Nav.Link>
                        <Nav.Link><Link className="link" to='/contact'>Contact</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

            </Switch>


        </Router>
    )
}

export default Bar;