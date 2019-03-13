import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalCreate extends React.Component {
  constructor(props){
    super(props);
    this.onClose = this.onClose.bind(this);
  }
  
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render(){
    if(!this.props.show){
      return null;
    }
    return(
      <div>
        <div>holis</div>
        <div>
          <button onClose={e => {
            this.onClose(e);
          }}>close</button>
        </div>
      </div>
    );
  }
}

export default ModalCreate;