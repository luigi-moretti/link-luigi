import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';

const links = [
    {route:"/", label:"Home"},
    {route:"/login", label:"Login"},
    {route:"/admin", label:"Admin"}
];

class Menu extends Component{

    renderLink = () =>{
        return links.map(link => 
            <Link key={link.route} className="nav-link" to={link.route}>
                {link.label}
            </Link>
            )
    }

    render() {
        return (
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {this.renderLink()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;