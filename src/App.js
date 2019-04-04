import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div className="Container mb-5">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
