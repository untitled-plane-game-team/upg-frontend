import React, {Component} from 'react';
import GuessCountryModal from './GuessCountryModal.js';

class GuessCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        showModal: false
      }
    }
    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);

  }
  handleHideModal() {
    this.setState({
      view: {
        showModal: false
      }
    })
  }

  handleShowModal() {
    this.setState({
      view: {
        showModal: true
      }
    })
  }

  render() {
    return (<div>
      <button className="waves-effect waves-light btn blue accent1" onClick={this.handleShowModal}>Guess a country</button>
      <GuessCountryModal handleHideModal={this.handleHideModal} show={this.state.view.showModal}/></div>
    );
  }
}

export default GuessCountry;
