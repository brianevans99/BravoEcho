import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer'
import '../../Styles/Wrapper.scss'
import styled from 'styled-components'
import Package from '../../Components/Package/Package'
import marketingData from '../../Data/marketingData'

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
    <Package key={item.id} item={item} />
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
              <h4>
                <i>[Show pricing for web services.]</i>
              </h4>
            </Col>
          </Row>
          <div className='d-flex justify-content-center'>
            Marketing packages:
          </div>
          <div className='packages'>{marketingItems}</div>
        </Container>
      </Styles>
    </Fragment>
  )
}
