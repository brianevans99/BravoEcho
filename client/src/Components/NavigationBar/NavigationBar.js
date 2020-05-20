import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../Assets/Images/crown.png'
import '../../Styles/NavigationBar.scss'

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='sm' variant='dark'>
        <Navbar.Brand>
          <Image
            src={logo}
            width={80}
            className='mr-3 ml-3'
            alt='Bravo Echo Web Development'
            fluid
          />
          Bravo Echo Web Development
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
