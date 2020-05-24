import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Title from '../../Components/Title/Title'
import '../../Styles/NavigationBar.scss'

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='sm' variant='dark'>
        <Navbar.Brand>
          <span>
            <Title />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='response-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/designs'>
              <Nav.Link>Designs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/marketing'>
              <Nav.Link>Marketing</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/pricing'>
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
