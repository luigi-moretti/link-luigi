import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => (
    <div className="title">
        <Form className="mx-auto col-md-4 col-sm-10">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Entre com seu email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Entre com sua senha" />
            </Form.Group>

            <Button variant="outline-secondary" type="submit" block>
                Entrar
            </Button>
        </Form>
    </div>
)

export default Login;