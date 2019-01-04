import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import Search from './Search'
import NotFound from './NotFound';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const BooksApp = () => {
    return (
        <Router>
            <div style={{ margin: '0 auto' }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/search' component={Search} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default BooksApp;
