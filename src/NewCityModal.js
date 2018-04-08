import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import cities from './data/CitiesWithIds.js';
import './NewCityModal.css';

class NewCityModal extends React.Component {
  constructor() {
    super();
    this.state = {selectedOption: ''}
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (<div className={this.props.show
        ? 'modal open'
        : 'modal close'}>
      <div className="modal-content" id="new-city-modal">
        <h5 className="ceter">Pick a city to fly to:</h5>
        <p>This will cost you 300 credits!</p>
        <Select
        name="city-request"
        value="{value}"
        onChange={this.handleChange}
        options={cities.City}
        id="city-request"
      />
        <label for="city-request">I want to fly to...</label>

      </div>
      <div className="modal-footer">
        <a class="waves-effect waves-light btn left" onClick={this.props.handleHideModal}>
          <i class="material-icons left">clear</i>
          Close
        </a>
        <button class=" right btn waves-effect waves-light" type="submit" name="action" onClick={this.props.handleHideModal}>
          Search for flights
          <i class="material-icons right">send</i>
        </button>
      </div>
    </div>);
  }
  propTypes: {
    handleHideModal: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired
  }
};

export default NewCityModal;
