import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../../api.json';

const ViewProfile = ({match: { params:{id} } })=> {
  const user = data.get(parseInt(id));
  console.log(user);
  if(!user){
    return <div>holis</div>
  }
  return(
    <div>
      <h1>{user.name}</h1>
    </div>
  )
};

export default ViewProfile;