import React from 'react';
import ViewProfile from '../components/ViewProfile.js';
import AllProfile from '../components/AllProfiles.js';
import { Container, Row, Col } from 'reactstrap';
import { Switch, Route } from "react-router-dom";
import Layout from "../../pages/components/Layout.js";
const ViewLayout  = ({match})=>(
  /*constructor(props){
    super(props);
  }*/
  <div>
    <p>{match.url}</p>
    <div className="section-home">
      <Switch>
        <Route exact path={`${match.url}`} component={AllProfile}/>
        <Route exact path={`${match.url}/:id`} component={ViewProfile}/>
      </Switch>
    </div>
  </div>
);

export default ViewLayout;
/*const Layout = () => {
  return(
    <div>
        <Navbar className="nav"  expand="md">
          <NavbarBrand className="brand" href="/">Zapp!</NavbarBrand>
          <NavbarToggler  />
          <Nav>
            <NavItem>
              <NavLink to="/">home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/users">uee</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    /*<div>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  )*/
