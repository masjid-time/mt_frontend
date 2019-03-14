import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import MainComponent from './components/MainComponent'

class App extends Component {
  render() {
    return (
      <div className="Container mb-5">
        <Header />
        <MainComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
