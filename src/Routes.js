import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin'
import { Container } from 'react-bootstrap';

class Routes extends Component{
    render(){
        return(
            <Container>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </Container>
        );
    }
}

export default Routes;