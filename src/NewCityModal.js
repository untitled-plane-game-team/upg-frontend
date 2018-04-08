import React from 'react';

class NewCityModal extends React.Component {

  render() {
    return (<div className={this.props.show
        ? 'modal open'
        : 'modal close'}>
      <div className="modal-content">
        <h5 className="ceter">Pick a city to fly to:</h5>
        <p>This will cost you 300 credits!</p>
        <textarea id="country-guess" class="materialize-textarea"></textarea>
        <label for="country-guess">I want to fly to...</label>
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
