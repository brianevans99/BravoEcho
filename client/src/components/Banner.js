import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logos from './Logos'
import TagLine from './TagLine'

export default class Banner extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Logos />
          <TagLine />
        </Row>
      </Container>
    )
  }
}
