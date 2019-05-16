import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DotEnv from 'dotenv';
import { toast, Zoom } from 'react-toastify';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

DotEnv.config();
toast.configure({
    position: 'top-center',
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    transition: Zoom,
    bodyClassName: 'text-center'
});

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Header />
                    <Body />
                    <Footer />
                </Router>
            </>
        );
    }
}

export default App;
