import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "../../components/Header";
import ListaLinks from '../../components/ListaLinks';

const Admin = () => (
    <div className="title">
        <h3 className="text-center">Bem-Vindo</h3>
        <Header/>
        <Form className="mx-auto col-md-4 col-sm-10 mb-5">
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Título do Link" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control type="text" placeholder="Endereço URL" />
            </Form.Group>

            <Button variant="outline-secondary" type="submit" block>
                Cadastrar
            </Button>
        </Form>
        <ListaLinks/>
    </div>
)

export default Admin;