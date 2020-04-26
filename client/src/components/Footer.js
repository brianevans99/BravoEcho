import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const rowStyle = {
  padding: '10px',
  backgroundColor: '#000',
  color: '#fff',
  textAlign: 'center',
}

export default class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <Row style={rowStyle}>
          <Col md={6}>
            <h5>Copyright 2020 | Bravo Echo Web Development</h5>
          </Col>
          <Col md={6}>
            <h5>Contact: 404.985.7506</h5>
          </Col>
        </Row>
      </Container>
    )
  }
}
