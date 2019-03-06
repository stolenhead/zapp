import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Container, Row, Col } from 'reactstrap';
import UsersAPI from '../../users.json';

const mapUser = url =>
  UsersAPI.all().map(u =>(
    <div>
      <Col md="12" >
        <ListGroup>
          <ListGroupItem className="justify-content-between">
            <Link to={`${url}/${u.id}`}>@holis
            <span className="span-margin">#holis {list.id}</span>
            <span className="right">
              <FontAwesomeIcon icon={faHeart} className="red"/>
              <span className="span-margin">holis</span>
            </span></Link>
          </ListGroupItem>
        </ListGroup>
      </Col>
    </div>
  ));

  const TopLayout = ({ match }) =>(
    <Container>
      <Row>
        <h2>#TOP </h2> 
        <h4 className="top-header">Soluciones más votadas</h4>
          {mapUser(match.url)}
      </Row>
    </Container>
  )
/*class TopLayout extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render(){
    let lists = this.props.top.map(list => {
      return(
        <Router key={list.id}>
          <div>
            <Col md="12" >
              <ListGroup>
                <ListGroupItem className="justify-content-between">
                  <Link to={`/${list.id}`}>@holis
                  <span className="span-margin">#holis {list.id}</span>
                  <span className="right">
                    <FontAwesomeIcon icon={faHeart} className="red"/>
                    <span className="span-margin">holis</span>
                  </span></Link>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </div>
        </Router>
      )
    })
        <Col md="12" key={list.id}>
          <TopList list={list}/>
        </Col>
    return(
      <Container>
        <Row>
          <h2>#TOP </h2> <h4 className="top-header">Soluciones más votadas</h4>
            {lists}
        </Row>
      </Container>
    )
  }
}*/

export default TopLayout;