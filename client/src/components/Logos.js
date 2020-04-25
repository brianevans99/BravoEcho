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
        <Col xl={2} className='d-none d-xl-block'></Col>
        <Col xl={3} lg={5} className='logos text-center'>
          <img
            src={logoBW}
            className='img-fluid animated fadeOut'
            alt='Bravo Echo b/w logo'
            id='logoBW'
          />
          <img
            src={logoColor}
            className='img-fluid animated fadeIn'
            alt='Bravo Echo color logo'
            id='logoColor'
          />
        </Col>
      </Fragment>
    )
  }
}
