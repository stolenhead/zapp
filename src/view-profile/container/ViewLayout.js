import React from 'react';
import ViewProfile from '../components/ViewProfile.js';
import AllProfile from '../components/AllProfiles.js';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route } from "react-router-dom";

const ViewLayout  = ({match})=>(
  /*constructor(props){
    super(props);
  }*/
  <div>
      <Switch>
        <Route exact path={`${match.url}`} component={AllProfile}/>
        <Route path={`${match.url}/:id`} component={ViewProfile}/>
      </Switch>
  </div>
);

export default ViewLayout;