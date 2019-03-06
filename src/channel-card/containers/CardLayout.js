import React from 'react';
import CardItem from '../components/CardItem.js';
import { Container, Row, Col } from 'reactstrap';

class CardLayout extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    let cardsItems = this.props.cards.map(card => {
      return(
        <Col sm="12" md="6" key={card.id}>
            <CardItem  card ={card}/>
        </Col>
      )
    })
    return(
      <Container fluid>
        <Row>
          {cardsItems}
        </Row>    
      </Container>
         
    )
  }
}

export default CardLayout