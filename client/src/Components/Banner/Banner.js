import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Logos from '../Logos/Logos'
import TagLine from '../TagLine/TagLine'

export default class Banner extends Component {
  constructor() {
    super()
    this.state = {
      leadText: 'Affordable Web',
      text1: 'Design',
      text2: 'SEO',
      text3: 'Marketing',
      text4: 'Presence',
      endText: 'for Small Businesses and Organizations',
    }
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Logos />
          <TagLine
            leadText={this.state.leadText}
            text1={this.state.text1}
            text2={this.state.text2}
            text3={this.state.text3}
            text4={this.state.text4}
            endText={this.state.endText}
          />
        </Row>
      </Container>
    )
  }
}
