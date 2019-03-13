import React, { Component } from "react";
import ButtonCreate from "../components/ButtonCreate.js";
import CardLayout from "../../channel-card/containers/CardLayout.js";
import TopLayout from "../../top-view/container/TopLayout.js";
import ModalCreate from "../../pages/components/ModalCreate.js";
import data from '../../api.json';
import '../../styles/App.css';
import UsersAPI from '../../apiuser.js';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Switch, Route,  BrowserRouter, Link  } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem, Badge} from 'reactstrap';

const mapUser = url =>
    UsersAPI.all().map(u =>(
        <div key={u.id} className="total-width">
        <Col md="12" >
            <ListGroup>
                <ListGroupItem className="justify-content-between top-list" >
                    <Link to={`${url}/${u.id}`}>
                    <span className="span-margin">@{u.name} {u.id}</span>
                    <span className="right">
                    <FontAwesomeIcon icon={faHeart} className="red"/>
                    <span className="span-margin">holis</span>
                    </span></Link>
                </ListGroupItem>
            </ListGroup>
        </Col>
        </div>
    ));

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };

    render(){
        return(
            <div className="section-home">
                <Row>
                    <Col sm="12" md="8">
                        <ButtonCreate onClick={this.showModal}/>
                        <ModalCreate onClose={this.showModal} show={this.state.show}/>
                        <CardLayout cards={data.cards}/>
                    </Col>
                    <Col sm="12" md="4">
                        <Container className="row">
                            <Row>
                                <h2>#TOP </h2> 
                                <h4 className="top-header">Soluciones más votadas</h4>
                                {mapUser('/users')}
                            </Row>
                        </Container>
                    </Col>
                </Row>      
            </div>
        );
    }
}
/*const Home = ({match}) => (
    <div>
        <div className="section-home">
            <Row>
                <Col sm="12" md="8">
                    <ButtonCreate/>
                    <CardLayout cards={data.cards}/>
                </Col>
                <Col sm="12" md="4">
                    <Container className="row">
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
)*/

export default Home;