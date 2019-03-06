import React from 'react';
import { Card, Row, Col, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReply } from '@fortawesome/free-solid-svg-icons'

function calculatePerson(actual, total){
    const leftPersons = total - actual;
    return leftPersons;
}

class CardItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="marginTB">
        <Card className="shadow">
          <CardHeader>
          {this.props.card.title}
            <Badge color="warning" className="span-margin">
              Faltan {calculatePerson(this.props.card.debate[0].persons_join, this.props.card.debate[0].total_join)}!
            </Badge>
            <span className="card-header-code">{this.props.card.id}</span>
          </CardHeader>
          <CardBody>
            <CardTitle>{this.props.card.description}</CardTitle>
            <div className="card-text">
              <Row>
                <Col md="10">
                  <div> Creado por: {this.props.card.debate[0].author}</div>
                </Col>
                <Col md="2" className="no-padding">
                  <div>
                    <FontAwesomeIcon icon={faHeart} className="red"/>
                    <span className="span-margin">{this.props.card.debate[0].likes}</span>
                  </div>
                  <div>
                  <FontAwesomeIcon icon={faReply} className="blue"/>
                  <span className="span-margin">{this.props.card.debate[0].replies}</span>
                  </div>
                </Col>
              </Row> 
            </div>
          </CardBody>
          <div className="footerCard ">
            <Row className="marginTB">
              <Col md="7">
                <a className="col-md-8">Replicar tema y competir ? </a>
              </Col>
              <Col md="4">
                <Button className="right">Unirme</Button>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    )
  }
}

export default CardItem;