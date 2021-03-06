import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import Title from '../../Components/Title/Title'
import crown from '../../assets/images/crown.png'
import '../../Styles/NavigationBar.scss'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  word-wrap: break-word;
  img {
    height: 50px;
    margin: 0 10px;
  }
`

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='sm' variant='dark'>
        <Navbar.Brand>
          <Styles>
            <img
              src={crown}
              className=''
              alt='Bravo Echo Web Development logo'
            />{' '}
            <span className='d-none d-md-block'>
              <Title />
            </span>
          </Styles>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='response-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='d-flex flex-wrap text-center'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to='/testimonials'>
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to='/designs'>
              <Nav.Link>Designs</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/marketing'>
              <Nav.Link>Marketing</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/pricing'>
              <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/blog'>
              <Nav.Link>Handle Your Business</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
