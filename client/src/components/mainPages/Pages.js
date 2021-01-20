import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState';
import { Switch, Route } from 'react-router-dom';
import Products from './products/Products';
import About from './home/About';
import Contact from './home/Contact';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFound from './utils/not-found/NotFound';
import CreateProduct from './createProduct/CreateProduct';

function Pages() {

    const state = useContext(GlobalState)

    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            <Route path="/login" component={isLogged ? NotFound : Login} />
            <Route path="/register" component={isLogged ? NotFound : Register} />

            <Route path="/create_product" component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" component={isAdmin ? CreateProduct : NotFound} />

            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default Pages
