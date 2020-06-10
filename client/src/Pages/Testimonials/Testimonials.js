import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
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

export default class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <Styles>
          <div className='wrapper' id='design'></div>
          <Container fluid>
            <Row className='py-3 d-flex flex-row align-items-center'>
              <Col className='d-flex justify-content-center' md={6}>
                <h2 className='py-3 animated fadeIn text-center'>
                  Making & keeping business owners happy.
                </h2>
              </Col>
              <Col className='d-flex justify-content-center' md={6}>
                <p>
                  Below are just some of the reasons that we are motivated to
                  work hard for you. We, too, are a small business, and we want
                  to succeed and share that success story with you as well.
                </p>
              </Col>
            </Row>
            <Row style={{ height: '22rem' }}>
              <Col className='p-2 d-flex justify-content-center' lg={4}>
                <Card style={{ width: '22rem' }} bg='dark'>
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>
                        <FaQuoteLeft />
                        {'  '}Today, 72% of the US public uses some type of
                        social media.{'  '} <FaQuoteRight />
                      </h4>
                      <span className='d-flex justify-content-end'>
                        <small>Source: Pew Research Center</small>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      That's a lot of eyes. Our professional designs and digital
                      marketing strategies will get their focus on your product.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='p-2 d-flex justify-content-center' lg={4}>
                <Card style={{ width: '22rem' }} bg='dark'>
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>
                        <FaQuoteLeft />
                        {'  '}Research shows that 40% of people abandon websites
                        that take more than 3 seconds to load.
                        {'  '} <FaQuoteRight />
                      </h4>
                      <span className='d-flex justify-content-end'>
                        <small>Source: Devrix Marketing Stats</small>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      Notice how this website navigates without reloading each
                      page. Our code is clean and efficient. Speed matters for
                      positive user experience .
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className='p-2 d-flex justify-content-center' lg={4}>
                <Card style={{ width: '22rem' }} bg='dark'>
                  <Card.Body>
                    <Card.Text>
                      <h4 className='text-center'>
                        <FaQuoteLeft />
                        {'  '}Only half of small businesses survive five years
                        or more.
                        {'  '} <FaQuoteRight />
                      </h4>
                      <span className='d-flex justify-content-end'>
                        <small>Source: Fundera Small Business Loans</small>
                      </span>
                    </Card.Text>
                    <Card.Text>
                      Yikes! You've put in all that hard work, don't become a
                      negative statistic. Let Bravo Echo Web Development build a
                      steady online presence for your business.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Styles>
      </Fragment>
    )
  }
}
