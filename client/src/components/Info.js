import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import Marketing from './Marketing'
import Seo from './Seo'

export default class Info extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Marketing />
        </Row>
        <Row>
          <Seo />
        </Row>
      </Container>
    )
  }
}
