import React from 'react';
import './GuessCountryModal.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import countries from './data/Countries.js';

class GuessCountryModal extends React.Component {
  constructor() {
    super();
    this.state = {selectedOption: ''}
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }

  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    return (<div className={this.props.show
        ? 'modal black-text open'
        : 'modal black-text close'}>
      <div className="modal-content" id="guess-country-modal" style={{"line-height": "normal"}}>
        <h5 className="ceter">Enter a country:</h5>
        <p>If you get it wrong, this will cost you 300 credits!</p>
        <Select
        name="country-guess"
        value={value}
        onChange={this.handleChange}
        options={countries.Countries}
        className="materialize-textarea"
        id="country-guess"
      />
        <label for="country-guess">My guess is...</label>
      </div>
      <div className="modal-footer">
        <a class="waves-effect waves-light btn left" onClick={this.props.handleHideModal}>
          <i class="material-icons left">clear</i>
          Close
        </a>
        <button className="right btn waves-effect waves-light" type="submit" name="action" onClick={this.props.handleHideModal}>
          Make my guess<i className="material-icons right" id="guess-country-submit">send</i>
        </button>
      </div>
    </div>);
  }
  propTypes: {
    handleHideModal: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired
  }
};

export default GuessCountryModal;
