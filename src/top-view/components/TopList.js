import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ViewLayout from '../../view-profile/container/ViewLayout.js';

class TopList extends React.Component {
  constructor(props){
    console.log('holi');
    console.log(props);
    super(props.route);
  }
  render(){
    return(
      <div>{this.props.route}</div>
    )
  };
  /*render() {
    return(
      <div>
        <ListGroup>
        <ListGroupItem className="justify-content-between">
        @{this.props.list.debate[0].solutions[0].winner[0].author}
        <span className="span-margin">#{this.props.list.debate[0].solutions[0].winner[0].title}</span>
        <span className="right">
          <FontAwesomeIcon icon={faHeart} className="red"/>
          <span className="span-margin">{this.props.list.debate[0].solutions[0].winner[0].likes}</span>
        </span>
        </ListGroupItem>
      </ListGroup>
      </div>
    )
  };*/
}

export default TopList;