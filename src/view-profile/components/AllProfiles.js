import React from 'react';
import UsersAPI from '../../apiuser.js';
import { Container, Row, Col, ListGroup, ListGroupItem, Badge} from 'reactstrap';
import { Switch, Route,  BrowserRouter, Link  } from "react-router-dom";

const mapUsers = url =>
    UsersAPI.all().map(u =>(
        <div key={u.id}>
        <Col md="12" >
            <ListGroup>
            <ListGroupItem className="justify-content-between" >
                <Link to={`${url}/${u.id}`}>
                {url}
                <span className="span-margin">#holis {u.id}</span>
                <span className="right">
                <span className="span-margin">holis</span>
                </span></Link>
            </ListGroupItem>
            </ListGroup>
        </Col>
        </div>
    ));

const AllProfile = ({ match }) =>(
  <div>
    <ul>{mapUsers(match.url)}</ul>
  </div>
);

export default AllProfile;