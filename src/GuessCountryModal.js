import React from 'react';
import './GuessCountryModal.css';

class GuessCountryModal extends React.Component {

  render() {
    return (<div className={this.props.show
        ? 'modal black-text open'
        : 'modal black-text close'}>
      <div className="modal-content">
        <h5 className="ceter">Enter a country:</h5>
        <p>If you get it wrong, this will cost you 300 credits!</p>
        <textarea id="country-guess" class="materialize-textarea"></textarea>
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
