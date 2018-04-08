import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TitleBar from './TitleBar.js';
import NewCity from './NewCity.js';
import FlightCards from './FlightCards.js';

class App extends Component {
  render() {
    return (<div>
      <TitleBar />
      <main>
        <NewCity />
        <FlightCards />
      </main>
    </div>);
  }
}

export default App;
