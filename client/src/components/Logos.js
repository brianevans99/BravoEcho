import React, { Component, Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import logoColor from '../assets/images/BRAVO_ECHO_COLOR_TRANSPARENT-min.png'
import logoBW from '../assets/images/BRAVO_ECHO_WHITE_OUTLINE-min.png'
import './logos.css'
import styled from 'styled-components'

export default class Logos extends Component {
  render() {
    return (
      <Fragment>
        <Col xl={1} className='d-none d-xl-block'></Col>
        <Col xl={4} lg={5} className='logos text-center'>
          <img
            src={logoBW}
            className='animated fadeOut'
            alt='Bravo Echo b/w logo'
            id='logoBW'
          />
          <img
            src={logoColor}
            className='animated fadeIn'
            alt='Bravo Echo color logo'
            id='logoColor'
          />
        </Col>
      </Fragment>
    )
  }
}
