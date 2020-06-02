import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
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
                <h2 className='py-3 animated fadeIn'>Professional Designs.</h2>
              </Col>
              <Col
                className='d-flex justify-content-center text-justify'
                md={6}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
