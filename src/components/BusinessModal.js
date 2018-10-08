import React, {Component} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import * as Actions from '../actions/index';
import {bindActionCreators} from 'redux';

class BusinessModal extends Component {
  render() {
    if(!this.props.selectedBusiness) {
        return <div></div>
    } else {
      return (
        <Modal
          isOpen={ this.props.modalIsOpen }
          onRequestClose={ () => this.props.onRequestClose() }>
            <div>
              <p><strong>{this.props.selectedBusiness.name}</strong></p>
              <p><strong>Address: </strong>{this.props.selectedBusiness.location.address1}</p>
              <p>{this.props.selectedBusiness.location.city}</p>
              <p>{`${this.props.selectedBusiness.location.state} ${this.props.selectedBusiness.location.zip_code}`}</p>

              <button onClick={() => this.props.actions.closeModal()}>close</button>
            </div>
          </Modal>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen,
    selectedBusiness: state.modal.selectedBusiness
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessModal);
