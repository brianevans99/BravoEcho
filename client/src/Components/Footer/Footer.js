import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import logoFooter from '../../assets/images/BRAVO_ECHO_Footer.png'

const rowStyle = {
  padding: '10px',
  backgroundColor: '#000',
  color: '#d6d6d6',
  textAlign: 'center',
}
const footerImg = {
  maxHeight: '100px',
}

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className=''>
        <Row style={rowStyle}>
          <Col
            md={4}
            className='d-flex flex-column justify-content-center align-items-center'
          >
            <Image
              src={logoFooter}
              style={footerImg}
              alt='Bravo Echo color logo'
            />
          </Col>
          <Col
            md={4}
            className='d-flex flex-column justify-content-center align-items-center'
          >
            <h5>Copyright 2020 | Bravo Echo Web Development</h5>
          </Col>
          <Col
            md={4}
            className='d-flex flex-column justify-content-center align-items-center'
          >
            <h5>Contact: 770.818.6305</h5>
            <small>
              <a href='/privacy'>Privacy Policy</a>
            </small>
          </Col>
        </Row>
      </Container>
    )
  }
}
