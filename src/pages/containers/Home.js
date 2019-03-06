import React, { Component } from "react";
import ButtonCreate from "../components/ButtonCreate.js";
import CardLayout from "../../channel-card/containers/CardLayout.js";
import TopLayout from "../../top-view/container/TopLayout.js";
import Layout from "../../pages/components/Layout.js";
import data from '../../api.json';
import '../../styles/App.css';
import { Row, Col } from 'reactstrap';


class Home extends Component {
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
                            <TopLayout top={data.cards}/>
                        </Col>
                    </Row>      
                </div>
            </div>
        );
    }
}

export default Home;