import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LinkItem from '../LinkItem';

class ListaLinks extends Component{
    render(){
        return(
            <Container className="text-center">
                <LinkItem/>
                <LinkItem/>
                <LinkItem/>
                <LinkItem/>
            </Container>
        );
    }
}

export default ListaLinks;