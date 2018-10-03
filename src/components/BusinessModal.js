import React from 'react';
import Modal from 'react-modal';

const BusinessModal = (props) => {
  if(!props.selectedBusiness) {
    return <div></div>;
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
        <div>
          <img src={props.selectedBusiness.imageSrc} alt=""/>
          <p><strong>{props.selectedBusiness.name}</strong></p>
          <p><strong>Address: </strong>{props.selectedBusiness.address}</p>
          <p>{props.selectedBusiness.city}</p>
          <p>{`${props.selectedBusiness.state} ${props.selectedBusiness.zipCode}`}</p>

          <button onClick={() => props.onRequestClose()}>close</button>
        </div>
      </Modal>
  );
};

export default BusinessModal;
