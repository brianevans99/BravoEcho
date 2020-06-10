import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from '../../Components/Footer/Footer'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'
import MktPackage from '../../Components/Package/MktPackage'
import WebPackage from '../../Components/Package/WebPackage'
import marketingData from '../../Data/marketingData'
import webData from '../../Data/webData'

const Styles = styled.div`
  content: '';
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  .packages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function Pricing() {
  const marketingItems = marketingData.map((item) => (
    <MktPackage key={item.id} item={item} />
  ))
  const webItems = webData.map((item) => (
    <WebPackage key={item.id} item={item} />
  ))
  return (
    <Fragment>
      <div className='wrapper' id='design'></div>
      <Styles>
        <Container fluid>
          <Row className='py-3 d-flex flex-row align-items-center'>
            <Col className='d-flex justify-content-center' md={6}>
              <h2 className='py-3 animated fadeIn text-center'>
                Affordable web services.
              </h2>
            </Col>
            <Col className='d-flex justify-content-center' md={6}>
              <p>
                Packages for web design and marketing services are shown below.
                For a more customized plan please reach out to us through our
                Contact Form.
              </p>
            </Col>
          </Row>
          <div className='d-flex justify-content-center'>
            <h5>Marketing packages:</h5>
          </div>
          <div className='packages'>{marketingItems}</div>
          <hr className='line' />
          <div className='d-flex justify-content-center'>
            <h5>Web design packages:</h5>
          </div>
          <div className='packages'>{webItems}</div>
        </Container>
        <Footer />
      </Styles>
    </Fragment>
  )
}
