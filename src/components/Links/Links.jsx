import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Link from '../Link';

class Links extends Component{
    render(){
        return(
            <Container className="text-center">
                <Link/>
                <Link/>
                <Link/>
                <Link/>
            </Container>
        );
    }
}

export default Links;