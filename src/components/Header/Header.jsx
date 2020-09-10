import React, { Component } from "react";
import { Container } from "react-bootstrap";
import {ReactComponent as AvatarSVG} from "../../assets/svg/man-3.svg";

class Header extends Component{

    render(){
        return(
            <Container className="text-center">
                <AvatarSVG className="col-md-2 col-6 mb-3"/>
                <h4>Luigi Moretti</h4>
            </Container>
        );
    }
}

export default Header;