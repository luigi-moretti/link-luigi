import React, { Component } from "react";
import { Container } from "react-bootstrap";
import LinkItem from '../LinkItem';

class ListaLinks extends Component{
    constructor(){
        super();
        this.state = {links:[
            {titulo: 'Linkedin', endereco: 'https://www.linkedin.com.br'},
            {titulo: 'Facebook', endereco: 'https://www.facebook.com.br'},
            {titulo: 'Instagram', endereco: 'https://www.instagram.com.br'},
        ]}
        
    }

    render(){
        return(
            <Container className="text-center">
                {this.state.links.map((link, index) => {
                    return(
                        <LinkItem
                            key = {index}
                            titulo = {link.titulo}
                            endereco = {link.endereco}
                        />

                    );
                })

                }
            </Container>
        );
    }
}

export default ListaLinks;