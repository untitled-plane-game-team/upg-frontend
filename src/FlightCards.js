import React, {Component} from 'react';

class FlightCards extends Component {
  render() {
    return (
      <section className="row">
        <article className="col s12 m6 l4">
          <div className="card blue darken-2 white-text">
            <div className="card-content">
              <header className="card-title">
                <span className="left-align">Flight to Copenhagen</span>
                <span className="flag-icon flag-icon-dk right"></span>
              </header>
              <h5>Cheapest</h5>
              <ul className="collection ">
                <li className="collection-item transparent">€190</li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
              <h5>Average</h5>
              <ul className="collection ">
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL PRICE (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="col s12 m6 l4">
          <div className="card blue darken-2 white-text">
            <div className="card-content">
              <header className="card-title">
                <span className="left-align">Flight to Belfast</span>
                <span className="flag-icon flag-icon-gb right"></span>
              </header>
              <h5>Cheapest</h5>
              <ul className="collection ">
                <li className="collection-item transparent">€62</li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
              <h5>Average</h5>
              <ul className="collection ">
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL PRICE (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="col s12 m6 l4">
          <div className="card blue darken-2 white-text">
            <div className="card-content">
              <header className="card-title">
                <span className="left-align">Flight to Marseilles</span>
                <span className="flag-icon flag-icon-fr right"></span>
              </header>
              <h5>Cheapest</h5>
              <ul className="collection ">
                <li className="collection-item transparent">€225</li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
              <h5>Average</h5>
              <ul className="collection ">
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL PRICE (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="col s12 m6 l4">
          <div className="card blue darken-2 white-text">
            <div className="card-content">
              <header className="card-title">
                <span className="left-align">Flight to Nice</span>
                <span className="flag-icon flag-icon-fr right"></span>
              </header>
              <h5>Cheapest</h5>
              <ul className="collection">
                <li className="collection-item transparent">€255</li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
              <h5>Average</h5>
              <ul className="collection ">
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL PRICE (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL DURATION (-300)</button>
                </li>
                <li className="collection-item transparent">
                  <button className="green lighten-1 waves-effect waves-light btn">REVEAL NUMBER OF STOPS (-300)</button>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    )
  }
}

export default FlightCards;
