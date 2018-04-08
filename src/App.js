import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar.js';
import NewCity from './NewCity.js';
import FlightCards from './FlightCards.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (<div>
      <TitleBar />
      <main>
        <NewCity />
        <FlightCards />
      </main>
      <Footer />
    </div>);
  }
}

export default App;
