import React, { Component } from "react";
import ButtonCreate from "../components/ButtonCreate.js";
import CardLayout from "../../channel-card/containers/CardLayout.js";
import TopLayout from "../../top-view/container/TopLayout.js";
import data from '../../api.json';
import '../../styles/App.css';
import UsersAPI from '../../apiuser.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route,  BrowserRouter, Link  } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem, Badge} from 'reactstrap';

const mapUser = url =>
    UsersAPI.all().map(u =>(
        <div key={u.id}>
        <Col md="12" >
            <ListGroup>
            <ListGroupItem className="justify-content-between" >
                <Link to={`${url}/${u.id}`}>
                {url}
                <span className="span-margin">#holis {u.id}</span>
                <span className="right">
                <FontAwesomeIcon icon={faHeart} className="red"/>
                <span className="span-margin">holis</span>
                </span></Link>
            </ListGroupItem>
            </ListGroup>
        </Col>
        </div>
    ));

const Home = ({match}) => (
    <div>
        <div className="section-home">
            <Row>
                <Col sm="12" md="8">
                    <ButtonCreate/>
                    <CardLayout cards={data.cards}/>
                </Col>
                <Col sm="12" md="4">
                    <Container>
                        <Row>
                            <h2>#TOP </h2> 
                            <h4 className="top-header">Soluciones más votadas</h4>
                            {mapUser('/users')}
                        </Row>
                    </Container>
                </Col>
            </Row>      
        </div>
    </div>
)
/*class Home extends Component {
    render() {
        return (
            <div>
                <Layout/>
                <div className="section-home">
                    <Row>
                        <Col sm="12" md="8">
                            <ButtonCreate/>
                            <CardLayout cards={data.cards}/>
                        </Col>
                        <Col sm="12" md="4">
                            <Route exact path = {`${match.url}`} component={TopLayout}/>
                        </Col>
                    </Row>      
                </div>
            </div>
        );
    }
    /*<TopLayout top={data.cards}/>
}*/

export default Home;