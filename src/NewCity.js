import React, {Component} from 'react';
import NewCityModal from './NewCityModal.js';

class NewCity extends Component {
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
      <a class="waves-effect waves-light btn-large full-width modal-trigger" onClick={this.handleShowModal}>
        <i class="material-icons right">add</i>Fly to another city (-300)</a>
      <NewCityModal handleHideModal={this.handleHideModal} show={this.state.view.showModal}/>
    </div>)
  }
}

export default NewCity;
