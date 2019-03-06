import React from 'react';
import { Button } from 'reactstrap';

class ButtonCreate extends React.Component {
  render(){
    return(
      <Button className="createBtn gray shadow" size="lg" block>Crear Debate</Button>
    )
  }
}

export default ButtonCreate;