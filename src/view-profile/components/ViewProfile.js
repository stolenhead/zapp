import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import data from '../../api.json';
import UsersAPI from '../../apiuser.js';

const ViewProfile = ({match: { params:{id} } })=> {
  const user = UsersAPI.get(parseInt(id));
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