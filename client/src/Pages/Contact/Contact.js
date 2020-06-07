import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import MyForm from '../../Components/MyForm/MyForm'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'

const Styles = styled.div`
  content: '';
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
`

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className='wrapper' id='design'></div>
        <Styles>
          <Container fluid>
            <Row className='py-3 d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center' md={6}>
                <h2 className='py-3 animated fadeIn text-center'>
                  Let's get started!
                </h2>
              </Col>
              <Col className='d-flex justify-content-center' md={6}>
                <p>
                  Contact Bravo Echo Web Development for a complimentary
                  consultation. Fill out the form below or call{' '}
                  <strong>(770) 818-6305</strong>.
                </p>
              </Col>
            </Row>
            <Row className='py-3 d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center'>
                <MyForm />
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
