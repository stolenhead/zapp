import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import TopLayout from '../../top-view/container/TopLayout';
import Home from '../../pages/containers/Home';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="nav"  expand="md">
          <NavbarBrand className="brand" href="/">Zapp!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav navbar className="navBox">
              <NavItem >
                <Link to='/' className="white">Home</Link>
              </NavItem>
              <NavItem >
                <Link to='/users' className="white">User</Link>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Layout;