import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home'
import Search from './Search'
import {
    BrowserRouter as Router,
    Route // for later
} from 'react-router-dom';

class BooksApp extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ margin: '0 auto' }}>
                    <Route exact path='/' component={Home} />
                    <Route path='/search' component={Search} />
                </div>
            </Router>
        );
    }
}

export default BooksApp;
