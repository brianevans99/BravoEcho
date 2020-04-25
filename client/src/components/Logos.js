import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import logoColor from '../assets/images/BRAVO_ECHO_COLOR_TRANSPARENT-min.png'
import logoBW from '../assets/images/BRAVO_ECHO_WHITE_OUTLINE-min.png'
import styled from 'styled-components'

const Styles = styled.div`
  .logos {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .logos img {
    max-height: 300px;
  }
  #logoBW {
    position: absolute;
  }
  #logoColor,
  #logoBW {
    animation-duration: 3s;
    animation-delay: 1s;
  }
  @media screen and (max-width: 768px) {
    #logoColor,
    #logoBW {
      max-height: 200px;
      margin-bottom: 10px;
    }
  }
`

export default class Logos extends Component {
  render() {
    return (
      <Styles>
        <Col className='logos'>
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
      </Styles>
    )
  }
}
