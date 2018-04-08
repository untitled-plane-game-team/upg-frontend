import React, {Component} from 'react';
import GuessCountry from './GuessCountry.js';
import logo from './logo.svg';

class TitleBar extends Component {
  render() {
    return (<header>
      <nav className="teal darken-4 nav my-nav">
        <ul className="row">
          <li className="col s12 m4">
            <img src={logo} id="logo" className="brand-logo center"/>
          </li>
        </ul>
      </nav>
      <nav className="teal darken-4 nav my-nav">
        <ul className="row">
          <li className="col s6 left-align">
            <GuessCountry />
          </li>
          <li className="col s6 right-align">
            <h5>Score: 69</h5>
          </li>
        </ul>
      </nav>
    </header>);
  }
}

export default TitleBar;
