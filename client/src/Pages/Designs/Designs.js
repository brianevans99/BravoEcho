import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
`

export default class Designs extends Component {
  render() {
    return (
      <Fragment>
        <Styles>
          <div className='wrapper' id='design'></div>
          <Container fluid>
            <Row className='py-3 d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center' md={6}>
                <h2 className='py-3 animated fadeIn text-center'>
                  Professional representation for your business.
                </h2>
              </Col>
              <Col
                className='d-flex justify-content-center text-justify'
                md={6}
              >
                <p>
                  Bravo Echo Web Development provides modern, stylish
                  presentations in our website designs and layouts. Whether you
                  need an ecommerce platform, interactivity with your users, or
                  just a visual online presence, we've got you covered.
                </p>
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
