import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Image } from 'react-bootstrap';

class Header extends Component{

    render(){
        return(
            <Container>
                <Image src="" alt="avatar" />
                <p>Luigi Moretti</p>
            </Container>
        );
    }
}

export default Header;