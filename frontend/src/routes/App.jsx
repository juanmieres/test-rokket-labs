import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Layout from '../components/Layout';
import Home from '../container/Home';
import NotFound from '../container/NotFound';
import Product from '../container/Product';

// import '../styles/App.css'

const App = () => {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Product} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}

export default App
