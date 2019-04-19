import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DotEnv from 'dotenv';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

DotEnv.config();

class App extends Component {
    render() {
        return (
            <div className='Container mb-5'>
                <Router>
                    <Header />
                    <Body />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
